# 3.6.0 - 2024-08-14
- NEW: can specify from and to without -- args; NEW: can specify --region

# 3.5.4
- patch/deps: deps version bump, in particular, AWS-SDKv3 version bump

# 3.5.3
- patch/fix: FIX: copying "directories" from S3 to-local-folder: they are just keys that in "/" and have size-0;

# patch/tooling: fix CI
- patch/doc: updated README
- patch/refactor: no longer checkin in build files

# 3.5.1
- patch/improvement: now "NoSuchKey: The specified key does not exist" are logged but are not fatal

# 3.5.0
- patch/tooling: initial conversion to AWS SDK v3 - ListObjectsV2 is almost 2x faster!

# 3.4.10
- patch/tooling: updated external deps

# 3.4.9
- patch/tooling: a couple other files not needed in npm

# 3.4.8
- patch/tooling: don't build tests into npm

# 3.4.7
- patch/fix: fixed edge-case for getBisectKey

# 3.4.6
- no longer need to shell out for names with spaces - duh
- added encodeURIComponent to CopySource as per the API doc

# 3.4.5
- corrected example in readme

# 3.4.4
- npm audit fix
- update node to v16 for testing

# 3.4.3
- patch/fix: fix issue #67 - --pattern wasn't actually working

# 3.4.2
- patch/fix: fix issue #73 - --to-prefix "" was being ignored
- patch/deps: updated deps
- patch/deps: updated deps
- patch/test: fixed tests
- patch/doc: added a little dock around getBisectKey

# 3.4.1
- patch/doc: added filter by owner examples

# 3.4.0
- patch/improvement: made --fetch-owner optional as it incurrs at 10% overhead in bucket-listing

# 3.3.4
- patch/fix: fixed issue #54
- set FetchOwner true in s3.listObjectsV2

# 3.3.3
- patch/deps: updated deps
- patch/doc: readme
- patch/doc: improved examples in changelog
- patch/doc: fixed readme link
- patch/tooling: build

# 3.3.1
- patch/doc: improved CLI doc

# 3.3.0
- minor/feature: updated deps - art-suite/cli now does exit(1) on errors

# 3.2.2
- patch/deps: updated deps

# 3.2.1
- patch/fix: tested (manually) and fixed the new common-copy-comands; should be working

# 3.2

Added common copy options:

- `--acl string` The canned ACL to apply to the object. Possible values include: private, public-read,
    public-read-write, authenticated-read, aws-exec-read, bucket-owner-read and
    bucket-owner-full-control

- `--cache-control string` Specifies caching behavior along the request/reply chain.
- `--content-disposition string` Specifies presentational information for the object.
- `--content-encoding string` Specifies what content encodings have been applied to the object and thus what decoding mechanisms
    must be applied to obtain the media-type referenced by the Content-Type header field.
- `--content-language string` The language the content is in.
- `--content-type string` A standard MIME type describing the format of the object data.
- `--expires date-time` The date and time at which the object is no longer cacheable. e.g. `"js:new Date"` or `"Wed Dec 31 1969
    16:00:00 GMT-0800 (PST)"` or `123456789`
- `--request-payer string` Confirms that the requester knows that they will be charged for the request. Bucket owners need not
    specify this parameter in their requests.
- `--storage-class string` By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD
    storage class provides high durability and high availability. Depending on performance needs, you
    can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.
    Possible values include: STANDARD, REDUCED_REDUNDANCY, STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING,
    GLACIER, DEEP_ARCHIVE and OUTPOSTS

# 3.1

Added the programmatic API. See the [README](README.md#API).