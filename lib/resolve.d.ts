export declare function findProject(root: string): Promise<string>;
export declare type Dependencies = Array<{
    name: string;
    version: string;
    url: string;
    cache: string;
}>;
export declare function gatherDependencies(projectPath: string): Promise<Dependencies>;
export default function resolve(projectDir: string, types: string, log?: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
}): Promise<void>;
