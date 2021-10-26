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
export default function publish(src: string, dest: string): Promise<void>;
