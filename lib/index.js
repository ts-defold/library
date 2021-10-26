"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const yargs_1 = __importDefault(require("yargs"));
const publish_1 = __importDefault(require("./publish"));
const resolve_1 = __importDefault(require("./resolve"));
yargs_1.default
    .scriptName('')
    .usage('Usage: $0 <command> [options]')
    .nargs('src', 1)
    .default('src', './')
    .describe('src', 'Source directory')
    .nargs('out', 1)
    .default('out', '')
    .describe('out', 'Output directory')
    .command('publish', 'Publish library types from a library source', () => null, async (argv) => {
    var _a, _b;
    const src = path_1.default.resolve((_a = process.env.INIT_CWD) !== null && _a !== void 0 ? _a : process.cwd(), argv.src);
    const out = path_1.default.resolve((_b = process.env.INIT_CWD) !== null && _b !== void 0 ? _b : process.cwd(), argv.out || './dist');
    const err = await (0, publish_1.default)(src, out).catch((e) => e);
    if (err) {
        console.error(err);
        process.exit(1);
    }
})
    .command('resolve', 'Resolve library types for a project', () => null, async (argv) => {
    var _a, _b;
    const src = path_1.default.resolve((_a = process.env.INIT_CWD) !== null && _a !== void 0 ? _a : process.cwd(), argv.src);
    const out = path_1.default.resolve((_b = process.env.INIT_CWD) !== null && _b !== void 0 ? _b : process.cwd(), argv.out || "./@types");
    const err = await (0, resolve_1.default)(src, out).catch((e) => e);
    if (err) {
        console.error(err);
        process.exit(1);
    }
})
    .demandCommand(1, 'You need at least one command before moving on')
    .version()
    .help().argv;
//# sourceMappingURL=index.js.map