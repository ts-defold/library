/// <library version="2.8.0" src="https://github.com/britzl/deftest" />
/** @noSelfInFile **/

/** @noResolution */
declare function describe(title: string, tests: () => void): void
declare function before(before: () => void): void
declare function after(after: () => void): void
declare function test(title: string, test: () => void): void
declare function assert_equal<T>(a: T, b: T): void
declare function assert_blank(value: any): void
declare function assert_empty(obj: Record<any, any>): void
declare function assert_error(func: any): void
declare function assert_not_error(func: any): void
declare function assert_false(value: boolean): void
declare function assert_not_false(value: boolean): void
declare function assert_not_true(value: boolean): void
declare function assert_true(value: boolean): void
declare function assert_greater_than(a: number, b: number): void
declare function assert_gte(a: number, b: number): void
declare function assert_less_than(a: number, b: number): void
declare function assert_lte(a: number, b: number): void
declare function assert_match(a: number, b: number): void
declare function assert_nil(value: any): void
declare function assert_type<T>(a: T, b: T): void
declare function assert_not_blank(value: any): void
declare function assert_not_empty(value: any): void
declare function assert_not_equal<T>(a: T, b: T): void
declare function assert_not_greater_than(a: number, b: number): void
declare function assert_not_gte(a: number, b: number): void
declare function assert_not_less_than(a: number, b: number): void
declare function assert_not_lte(a: number, b: number): void
declare function assert_not_match(a: number, b: number): void
declare function assert_not_nil(value: any): void
declare function assert_not_type<T>(a: T, b: T): void





