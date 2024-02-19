# Type Library Template

Copy this template as a starting point for your type library you wish to contribute.

## Contents
- `library.json`: Provide the name of the `library` and the `url` to the root of the library repository. The `library` field is typically the name of the top level require.
i.e. `require('template.thing')` would be listed as 'template'.

- `template-1.0.0.d.ts`: This is a versioned type file, it includes a `reference` to the base types, and is marked with a special `library` tag to indicate the exact version and url the types are generated for. As most types do not drastically change version to version, you can split your types up into multiple files and the `reference` path comments will be resolved into a single file at publish time.

- `template.d.ts` - This is the core types for this library. Version `1.0.0` simply includes this file with a `reference` path.

## Caveats
When declaring ambient module types using `declare module` any files that are in the scope of the project's `tsconfig.json` will be automatically included. This is why we amalgamate the types when publishing as importing ambient types is done globally and not automatically by tsc.
