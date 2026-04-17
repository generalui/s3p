# s3p — notes for Claude

Source is CaffeineScript (`.caf`). Build compiles to `build/`. Tests run from `build/` via Jest.

## Workflow
- `npm run build` — compile `source/**.caf` → `build/**.js`. Errors from CaffeineScript are clear; read the caret location.
- `npm test` — Jest against `build/`. Needs `NODE_OPTIONS=--experimental-vm-modules` (wired in) for AWS SDK v3 dynamic imports.
- `npm run test:coverage` — same + coverage report.
- MinIO: `docker compose up -d`. Integration tests require env: `S3_ENDPOINT=http://localhost:9000 AWS_ACCESS_KEY_ID=testAccessKey AWS_SECRET_ACCESS_KEY=testSecretKey AWS_REGION=us-east-1`. Without `S3_ENDPOINT`, integration tests auto-skip.
- Test scenarios share `source/test/MinioTestHelper.caf` — use `setupTestScenario` which handles bucket cleanup in `afterAll`.

## CLI → API
Every CLI command has `--api-example` that prints the equivalent `require('s3p').xxx({...})` call. Use this to understand how to drive the API from tests.

## CaffeineScript gotchas (things I've hit)

**Skim this before writing `.caf` — the parser is strict about layout.**

### Chained method calls
- Multi-line: leading dot on each continuation line.
  ```
  foo
  .replace a, b
  .replace c, d
  ```
- One line: all but the last call need explicit parens.
  ```
  foo.replace(a, b).replace c, d
  ```
- WRONG: `foo.replace a, b .replace c, d` — parser chokes mid-line.

### `typeof` in string interpolation is a parse error
```
"got: #{typeof x}"   # ERROR
```
Work around by assigning first or dropping the type name from the message.

### Implicit-block args ≠ array
```
fn
  itemA
  itemB
  itemC
```
compiles to `fn(itemA, itemB, itemC)` — three separate arguments. If the callee expects a single array, prefix with `[]`:
```
fn []
  itemA
  itemB
  itemC
```
This bit me in `Sync.test.caf` calling `putTestObjects` (which takes one array).

### `merge x` + indented block
```
merge x
  key: value   # WRONG — parses as x(key: value)
```
Use either inline form `merge x, key: value`, or block form with `merge` alone on its line:
```
merge
  x
  key: value
```

### Object literal shorthand with trailing bare identifier
```
{} Bucket: bucket, Key, Body
```
does NOT expand to `{Bucket: bucket, Key: Key, Body: Body}`. It's parsed as `{Bucket: [bucket, Key, Body]}`. Use explicit colons or a block form:
```
{} Bucket: bucket, Key: Key, Body: Body
```
or
```
Bucket: bucket
Key:    Key
Body:   Body
```

### `describe.skip` is not a thing here
Gate integration tests with `if endpoint` wrapping the whole `describe` block; in the `else`, register a `test "skipped"` so Jest sees the file as a test file.

### Smart import
`import &@aws-sdk/client-s3` auto-resolves any later-referenced unassigned names (`S3Client`, `PutObjectCommand`, `ListObjectsV2Command`, etc.) to properties of that module. No need to destructure up front.

### Everything returns a value
Functions return the last expression. The last statement in a file is auto-exported. Useful, but means stray expressions at the end of a function become its return value.

### Scopes
`if` / `unless` do NOT create a new scope. Functions, classes, comprehensions, and `while`/`until` do. Variables are auto-let at the topmost scope where they're assigned.

## Known existing-code pitfalls
- `normalizeOptions` in `S3Comprehensions.caf` strips `returning:` from options without mapping it to `returnValue`. Callers must use `returnValue:` directly (see `S3P.list` fix).
- `syncObject` in `S3.caf` calls `@copyObject` which doesn't exist — probably should be `@copy`. Not exercised by tests; the higher-level `S3P.sync` flow doesn't go through `syncObject`.
