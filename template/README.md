# Type Library Template

Copy this template as a starting point for your type library you wish to contribute.

## Contents
- `library.json`: Provide the name of the `library` and the `url` to the root of the library repository. The `library` field is typically the name of the top level require.
i.e. `require('template.thing')` would be listed as 'template'.

- `template-1.0.0.d.ts`: This is a versioned type file, it includes a `reference` to the base types, and is marked with a special `library` tag to indicate the exact version and url the types are generated for. As most types do not drastically change version to version, you can split your types up into multiple files and the `reference` path comments will be resolved into a single file at publish time.

- `template.d.ts` - This is the core types for this library. Version `1.0.0` simply includes this file with a `reference` path.

## Caveats
When declaring ambient module types using `declare module` any files that are in the scope of the project's `tsconfig.json` will be automatically included. This is why we amalgamate the types when publishing as importing ambient types is done globally and not automatically by tsc.

## Style
`undefined` is used to represent Lua's `nil` type, as recommended by [TypeScriptToLua](https://typescripttolua.github.io/docs/caveats/#undefined-and-null).

If a broad type is necessary, `AnyNotNil` (defined in [@typescript-to-lua/language-extensions](https://github.com/TypeScriptToLua/TypeScriptToLua)) means any non-null type, and `unknown` means any unknown value. Use of the `any` type is discouraged.

## Contributing
Your contributions are welcome! We appreciate the help.

Here are a couple things to be aware of before opening a pull request:

- All commits to this repo must be [signed](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits).
- Your fork must be up-to-date with the main branch before your PR can be merged.
