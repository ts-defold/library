"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatherDependencies = exports.findProject = void 0;
const await_to_js_1 = require("await-to-js");
const crypto_1 = require("crypto");
const promises_1 = __importDefault(require("fs/promises"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const path = __importStar(require("path"));
const semver = __importStar(require("semver"));
const TYPES_REGISTRY = "https://ts-defold.dev/library";
async function findProject(root) {
    for await (const d of await promises_1.default.opendir(root)) {
        if (d.isDirectory()) {
            const projectPath = await findProject(path.join(root, d.name));
            if (projectPath)
                return projectPath;
        }
        else if (d.isFile() && d.name === "game.project") {
            return path.join(root, d.name);
        }
    }
    return "";
}
exports.findProject = findProject;
async function gatherDependencies(projectPath) {
    const [err, project] = await (0, await_to_js_1.to)(promises_1.default.readFile(projectPath, "utf8"));
    if (err || !project)
        throw new Error(`Failed to read project file: ${projectPath}`);
    // Parse deps from project file
    const deps = project
        .split('\n')
        .filter((l) => l.startsWith('dependencies'))
        .map((dep) => {
        return dep.split('=')[1].trim();
    });
    // Extract name, version, cache from deps
    const results = [];
    for (const url of deps) {
        const parts = new URL(url).pathname.split('/');
        if (parts.length < 3)
            throw new Error(`Can not parse dependency`);
        const name = parts[2];
        const version = (parts.find((p) => p.match(/^\d+\.\d+\.\d+.*/) !== null) || 'latest').replace('.zip', '');
        const cache = path.join(path.dirname(projectPath), '.internal', `${(0, crypto_1.createHash)('sha1').update(url).digest('hex')}.zip`);
        results.push({
            name,
            version,
            url,
            cache,
        });
    }
    return results;
}
exports.gatherDependencies = gatherDependencies;
async function resolve(projectDir, types, log = console.log) {
    //* Find a game.project file
    const project = await findProject(projectDir);
    if (!project)
        throw new Error(`No game.project file found in ${projectDir}`);
    //* Fetch dependencies from game.project file
    const deps = await gatherDependencies(project);
    //* Resolve dependencies against registry https://ts-defold.dev/library
    const resolved = new Map();
    for (const dep of deps) {
        const [_err, index] = await (0, await_to_js_1.to)((0, node_fetch_1.default)(`${TYPES_REGISTRY}/${dep.name}/`).then((res) => res.json()));
        if (!index || _err) {
            log(`No suitable types found for ${dep.name}`);
            continue;
        }
        //* Find the best version
        const ordered = index.versions.sort((a, b) => semver.compare(a.version, b.version));
        const target = ordered.find((v) => semver.satisfies(v.version, dep.version));
        const latest = ordered.length > 0 ? ordered[ordered.length - 1] : undefined;
        const version = target || latest;
        if (!version) {
            log(`No suitable version found for ${dep.name}`);
            continue;
        }
        //* If the version exists and matches the checksum we can skip downloading
        const localPath = path.join(types, version.path);
        const [err, type] = await (0, await_to_js_1.to)(promises_1.default.readFile(localPath, 'utf8'));
        if (!err && type) {
            if (version.checksum === (0, crypto_1.createHash)('md5').update(type).digest('hex')) {
                log(`Using cached types for ${dep.name}@${version.version}`);
                resolved.set(dep.name, { version: version.version, index });
                continue;
            }
        }
        //* Download the target version
        log(`Downloading types for ${dep.name}@${version.version}`);
        const data = await (await (0, node_fetch_1.default)(`${TYPES_REGISTRY}/${dep.name}/${version.path}`)).buffer();
        //* Write the types to disk
        await promises_1.default.mkdir(path.dirname(localPath), { recursive: true });
        await promises_1.default.writeFile(localPath, data);
        resolved.set(dep.name, { version: version.version, index });
    }
    //* Try to generate types from the dependencies directly if still unresolved
    const needsTypes = deps.filter((d) => !resolved.has(d.name));
    for (const dep of needsTypes) {
        void dep;
        // TODO: Search for a script_api.yaml in either the cached dep or from the url
        // TODO: Run the script_api.yaml through type-gen
    }
    // TODO: Log and request types from the library service for any unresolved dependencies
    //* Prune old versions of types if known
    const hasTypes = deps.filter((d) => resolved.has(d.name));
    for (const dep of hasTypes) {
        const { version, index } = resolved.get(dep.name);
        const prune = index.versions.filter((v) => v.version !== version);
        for (const v of prune) {
            const localPath = path.join(types, v.path);
            const [err] = await (0, await_to_js_1.to)(promises_1.default.unlink(localPath));
            if (!err)
                log(`Pruned types ${dep.name}@${v.version}`);
        }
    }
}
exports.default = resolve;
//# sourceMappingURL=resolve.js.map