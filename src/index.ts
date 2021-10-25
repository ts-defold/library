import path from 'path';
import yargs from 'yargs';

import publish from "./publish";
import resolve from "./resolve";

yargs
  .scriptName('')
  .usage('Usage: $0 <command> [options]')
  .nargs('src', 1)
  .default('src', './')
  .describe('src', 'Source directory')
  .nargs('out', 1)
  .default('out', './dist')
  .describe('out', 'Output directory')
  .command('publish', 'Publish library types from a library source', () => null,
    async (argv) => {
      const src = path.resolve(process.env.INIT_CWD ?? process.cwd(), argv.src);
      const out = path.resolve(process.env.INIT_CWD ?? process.cwd(), argv.out);
      
      const err = await publish(src, out).catch((e) => e);
      if (err) {
        console.error(err);
        process.exit(1);
      }
    })
  .command('resolve', 'Resolve library types for a project', () => null,
  async (argv) => {
    const src = path.resolve(process.env.INIT_CWD ?? process.cwd(), argv.src);
    const out = path.resolve(process.env.INIT_CWD ?? process.cwd(), "./@types");

    const err = await resolve(src, out).catch((e) => e);
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .version()
  .help().argv;
