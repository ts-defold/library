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
const await_to_js_1 = require("await-to-js");
const crypto_1 = require("crypto");
const promises_1 = __importDefault(require("fs/promises"));
const path = __importStar(require("path"));
const xml2js_1 = require("xml2js");
var PublishStep;
(function (PublishStep) {
    PublishStep[PublishStep["Init"] = 0] = "Init";
    PublishStep[PublishStep["Packages"] = 1] = "Packages";
    PublishStep[PublishStep["Libraries"] = 2] = "Libraries";
    PublishStep[PublishStep["Amalgamate"] = 3] = "Amalgamate";
    PublishStep[PublishStep["Index"] = 4] = "Index";
    PublishStep[PublishStep["Registry"] = 5] = "Registry";
})(PublishStep || (PublishStep = {}));
async function publish(src, dest) {
    let step = PublishStep.Init;
    try {
        //* Walk directories in packages
        step = PublishStep.Packages;
        //* ------------------------------------------------------------
        const packages = [];
        for await (const d of await promises_1.default.opendir(src)) {
            if (d.isDirectory())
                packages.push(path.join(src, d.name));
        }
        //* Collect library metadata
        step = PublishStep.Libraries;
        //* ------------------------------------------------------------
        const modules = {};
        for (const m of packages) {
            try {
                //* Parse and verify library.json
                const [err, libFile] = await (0, await_to_js_1.to)(promises_1.default.readFile(path.join(m, "library.json")));
                if (err || !libFile)
                    throw new Error('Missing library.json');
                const lib = JSON.parse(libFile.toString());
                if (!lib.name)
                    throw new Error('Missing library name');
                if (!lib.url)
                    throw new Error('Missing library url');
                //* Insert library index
                const key = m;
                modules[key] = {
                    name: lib.name,
                    url: lib.url,
                    versions: [],
                };
                //* Collect *.d.ts files that have a library comment header
                for await (const d of await promises_1.default.opendir(m)) {
                    if (d.isFile() && d.name.endsWith(".d.ts")) {
                        const file = path.join(m, d.name);
                        const data = await promises_1.default.readFile(file, "utf8");
                        const match = data.match(/^\/\/\/\s*(<library.*\/>)$/m);
                        if (match) {
                            const { library } = await (0, xml2js_1.parseStringPromise)(match[1]);
                            if (library.$ && library.$["version"] && library.$["src"]) {
                                var shasum = (0, crypto_1.createHash)('sha1');
                                shasum.update(library.$["src"]);
                                modules[key].versions.push({
                                    version: library.$["version"],
                                    url: library.$["src"],
                                    hash: shasum.digest('hex'),
                                    path: path.join(m, d.name),
                                    checksum: "",
                                });
                            }
                        }
                    }
                }
            }
            catch (e) {
                throw new Error(`Skipping ${path.basename(m)}, ${e.message}`);
            }
        }
        ;
        //* Amalgamate referenced types into library versions
        step = PublishStep.Amalgamate;
        //* ------------------------------------------------------------
        for (const key of Object.keys(modules)) {
            const lib = modules[key];
            const cache = {};
            for (const version of lib.versions) {
                // Read in typing and replace references to other files
                let data = await promises_1.default.readFile(version.path, "utf8");
                let match;
                do {
                    match = data.match(/^\/\/\/\s*(<reference.*\/>)$/m);
                    if (match) {
                        const { reference } = await (0, xml2js_1.parseStringPromise)(match[1]);
                        if (reference.$ && reference.$["path"]) {
                            const ref = path.join(path.dirname(version.path), reference.$["path"]);
                            if (!cache[ref]) {
                                const refData = await promises_1.default.readFile(ref, "utf8");
                                cache[ref] = refData;
                            }
                            data = data.replace(match[0], cache[ref]);
                        }
                    }
                } while (match);
                data = data.trimEnd() + "\n";
                // compute checksum
                version.checksum = (0, crypto_1.createHash)('md5').update(data).digest('hex');
                // make path relative
                version.path = path.basename(version.path);
                // Write typing file to out directory
                const output = path.join(dest, path.basename(key));
                await promises_1.default.mkdir(output, { recursive: true });
                await promises_1.default.writeFile(path.join(output, version.path), data);
            }
        }
        //* Generate an index.json for each module
        step = PublishStep.Index;
        //* ------------------------------------------------------------
        for (const key of Object.keys(modules)) {
            const lib = modules[key];
            await promises_1.default.mkdir(path.join(dest, path.basename(key)), { recursive: true });
            await promises_1.default.writeFile(path.join(dest, path.basename(key), "index.json"), JSON.stringify(lib, null, 2));
        }
        //* Generate a package registry index.json for each module
        step = PublishStep.Registry;
        //* ------------------------------------------------------------
        const registry = {};
        for (const key of Object.keys(modules)) {
            const lib = modules[key];
            registry[path.basename(key)] = {
                name: lib.name,
                url: lib.url,
            };
        }
        await promises_1.default.writeFile(path.join(dest, "index.json"), JSON.stringify(registry, null, 2));
    }
    catch (e) {
        console.error(`${PublishStep[step]}:`, e.message);
        process.exit(1);
    }
}
exports.default = publish;
//# sourceMappingURL=publish.js.map