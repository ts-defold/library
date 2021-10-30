import { to } from "await-to-js";
import { createHash } from "crypto";
import fs from "fs/promises";
import fetch from 'node-fetch';
import * as path from "path";
import * as semver from "semver";
import type { Index } from "./publish";

const TYPES_REGISTRY = "https://ts-defold.dev/library";

export async function findProject(root: string): Promise<string> {
  for await (const d of await fs.opendir(root)) {
    if (d.isDirectory()) {
      const projectPath = await findProject(path.join(root, d.name) );
      if (projectPath) return projectPath;
    }
    else if (d.isFile() && d.name === "game.project") {
      return path.join(root, d.name);
    }
  }

  return "";
}

export type Dependencies = Array<{
  name: string;
  version: string;
  url: string;
  cache: string;
}>;

export async function gatherDependencies(projectPath: string): Promise<Dependencies> {
  const [err, project] = await to(fs.readFile(projectPath, "utf8"));
  if (err || !project) throw new Error(`Failed to read project file: ${projectPath}`);

  // Parse deps from project file
  const deps = project
    .split('\n')
    .filter((l) => l.startsWith('dependencies'))
    .map((dep) => {
      return dep.split('=')[1].trim();
    });
  
    // Extract name, version, cache from deps
    const results: Dependencies = [];
    for (const url of deps) {
      const parts = new URL(url).pathname.split('/');
      if (parts.length < 3) throw new Error(`Can not parse dependency`);

      const name = parts[2];
      const version = (parts.find((p) => p.match(/^\d+\.\d+\.\d+.*/) !== null) || 'latest').replace('.zip', '');
      const cache = path.join(path.dirname(projectPath), '.internal', `${createHash('sha1').update(url).digest('hex')}.zip`);
      
      results.push({
        name,
        version,
        url,
        cache,
      });
    }
  
  return results;
}

export default async function resolve(projectDir: string, types: string, log = console.log) {
  //* Find a game.project file
  const project = await findProject(projectDir);
  if (!project) throw new Error(`No game.project file found in ${projectDir}`);

  //* Fetch dependencies from game.project file
  const deps = await gatherDependencies(project);

  //* Resolve dependencies against registry https://ts-defold.dev/library
  const resolved = new Map<string, { version: string, index: Index }>();
  for (const dep of deps) {
    const index = await (
      await fetch(`${TYPES_REGISTRY}/${dep.name}/`)
    ).json() as Index;

    //* Find the best version
    const ordered = index.versions.sort((a, b) => semver.compare(a.version, b.version));
    const target = ordered.find((v) => semver.satisfies(v.version, dep.version));
    const latest = ordered.length > 0 ? ordered[ordered.length - 1] : undefined;
    const version = target || latest;
    if (!version) throw new Error(`No suitable version found for ${dep.name}`);

    //* If the version exists and matches the checksum we can skip downloading
    const localPath = path.join(types, version.path);
    const [err, type] = await to(fs.readFile(localPath, 'utf8'));
    if (!err && type) {

      if (version.checksum === createHash('md5').update(type).digest('hex')) {
        log(`Using cached types for ${dep.name}@${version.version}`);
        resolved.set(dep.name, { version: version.version, index });
        continue;
      }
    }

    //* Download the target version
    log(`Downloading types for ${dep.name}@${version.version}`);
    const data = await (
      await fetch(`${TYPES_REGISTRY}/${dep.name}/${version.path}`)
    ).buffer();
    
    //* Write the types to disk
    await fs.mkdir(path.dirname(localPath), { recursive: true });
    await fs.writeFile(localPath, data);
    resolved.set(dep.name, { version: version.version, index });
  }

  //* Generate types from library directly
  const needsTypes = deps.filter((d) => !resolved.has(d.name));
  for (const dep of needsTypes) {
    void dep;
    // TODO: Search for a script_api.yaml in either the cached dep or from the url
    // TODO: Run the script_api.yaml through type-gen
  }

  //* Prune old versions of types if known
  const hasTypes = deps.filter((d) => resolved.has(d.name));
  for (const dep of hasTypes) {
    const { version, index } = resolved.get(dep.name)!;
    const prune = index.versions.filter((v) => v.version !== version);
    for (const v of prune) {
      const localPath = path.join(types, v.path);
      const [err] = await to(fs.unlink(localPath));
      if (!err) log(`Pruned types ${dep.name}@${v.version}`);
    }
  }
}
