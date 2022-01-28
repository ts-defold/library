import { to } from "await-to-js";
import { createHash } from "crypto";
import fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import { parseStringPromise } from "xml2js";

export interface Library {
  name?: string;
  url?: string;
}

export interface Version {
  version: string;
  url: string;
  hash: string;
  path: string;
  checksum: string;
}

export interface Index extends Library {
  versions: Version[];
}

enum PublishStep {
  Init,
  Packages,
  Libraries,
  Amalgamate,
  Index,
  Registry,
}

//* Write a string to a file, creating the directory if it doesn't exist
const writeFile = async (file: string, data: string|object) => {
	const output = typeof data === "string" ? data : JSON.stringify(data, null, 2);
	await fs.mkdir(path.dirname(file), { recursive: true });
	await fs.writeFile(file, output + os.EOL, "utf8");
}

export default async function publish(src: string, dest: string) {
  let step = PublishStep.Init;
  try {

    //* Walk directories in packages
    step = PublishStep.Packages;
    //* ------------------------------------------------------------
    const packages: string[] = [];
    for await (const d of await fs.opendir(src)) {
      if (d.isDirectory()) packages.push( path.join(src, d.name) );
    }

    //* Collect library metadata
    step = PublishStep.Libraries;
    //* ------------------------------------------------------------
    const modules: Record<string, Index> = {};
    for (const m of packages) {
      try {
        //* Parse and verify library.json
        const [err, libFile] = await to(fs.readFile(path.join(m, "library.json")));
        if (err || !libFile) throw new Error('Missing library.json');

        const lib = JSON.parse(libFile.toString()) as Library;
        if (!lib.name) throw new Error('Missing library name');
        if (!lib.url) throw new Error('Missing library url');

        //* Insert library index
        const key = m;
        modules[key] = {
          name: lib.name,
          url: lib.url,
          versions: [],
        }

        //* Collect *.d.ts files that have a library comment header
        for await (const d of await fs.opendir(m)) {
          if (d.isFile() && d.name.endsWith(".d.ts")) {
            const file = path.join(m, d.name);
            const data = await fs.readFile(file, "utf8");
            const match = data.match(/^\/\/\/\s*(<library.*\/>)$/m);
            if (match) {
              const { library } = await parseStringPromise(match[1]) as {
                library: {
                  $?: {
                    version?: string;
                    src?: string;
                  }
                }
              };
              if (library.$ && library.$["version"] && library.$["src"]) {
                var shasum = createHash('sha1');
                shasum.update(library.$["src"])

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
      } catch (e) {
        throw new Error(`Skipping ${path.basename(m)}, ${(e as Error).message}`);
      }
    };

    //* Amalgamate referenced types into library versions
    step = PublishStep.Amalgamate;
    //* ------------------------------------------------------------
    for (const key of Object.keys(modules)) {
      const lib = modules[key];
      const cache: Record<string, string> = {};
      for (const version of lib.versions) {
        // Read in typing and replace references to other files
        let data = await fs.readFile(version.path, "utf8");
        let match: RegExpMatchArray | null;
        do {
          match = data.match(/^\/\/\/\s*(<reference.*\/>)$/m);
          if (match) {
            const { reference } = await parseStringPromise(match[1]) as {
              reference: {
                $?: {
                  path?: string;
                }
              }
            };

            if (reference.$ && reference.$["path"]) {
              const ref = path.join(path.dirname(version.path), reference.$["path"]);
              if (!cache[ref]) {
                const refData = await fs.readFile(ref, "utf8");
                cache[ref] = refData;
              }
              data = data.replace(match[0], cache[ref]);
            }
          }
        } while (match);
        data = data.trimEnd() + "\n";

        // compute checksum
        version.checksum = createHash('md5').update(data).digest('hex');

        // make path relative
        version.path = path.basename(version.path);

        // Write typing file to out directory
        const output = path.join(dest, path.basename(key));
        await writeFile(path.join(output, version.path), data);
      }
    }

    //* Generate an index.json for each module
    step = PublishStep.Index;
    //* ------------------------------------------------------------
    for (const key of Object.keys(modules)) {
      const lib = modules[key];
      await writeFile(path.join(dest, path.basename(key), "index.json"), lib);
    }

    //* Generate a package registry index.json for each module
    step = PublishStep.Registry;
    //* ------------------------------------------------------------
    const registry: Record<string, { name: string, url: string }> = {}
    for (const key of Object.keys(modules)) {
      const lib = modules[key];
      registry[path.basename(key)] = {
        name: lib.name!,
        url: lib.url!,
      }
    }
    await writeFile(path.join(dest, "index.json"), registry);

  } catch (e) {
    console.error(`${PublishStep[step]}:`, (e as Error).message);
    process.exit(1);
  }
}
