export declare function to<T, U = Error>(promise: Promise<T>): Promise<[U, undefined] | [undefined, T]>;
