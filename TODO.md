# TODO

- document the API
  - Interested in using the API? Let us know! Email: shane@genui.com

# Features
- s3p.copy - should retry retry-able errors... How can we tell? (I had an error which roughly equated to our clocks being out of sync with world-time - weird, but I expect it's probably because I had so many open copy requests, some timed out) - The answer, at least for now, was to add 'sync' capability so you could re-run they copy and pick up previous failures.
- support for S3 key characters outside the currently supported key chars:
    ```
    <space>
    !"#$%&'()*+,-./0123456789:;<=>?@
    ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`
    abcdefghijklmnopqrstuvwxyz{|}~
    ```
- local file system support
  - S3P was built to accelerate copying between two S3 buckets, but there's no reason it can't also accelerate copying to and from a local file system on an EC2 instance, an on-premises machine or your own dev machine.
  - Current status:
    - **supported: copy to local file system**
    - not supported: copy from local file system
    - not supported: sync/compare to or from local file system

- extended S3 copy options support; exactly which of these we should support is TBD. Note, S3 uses both copyObject and aws-cp, so we need to ensure it works for both:
    ```
    aws cp:
      # simple string values
      --acl                                 ACL
      --cache-control                       CacheControl
      --content-disposition                 ContentDisposition
      --content-encoding                    ContentEncoding
      --content-language                    ContentLanguage
      --content-type                        ContentType
      --expires                             Expires
      --request-payer                       RequestPayer
      --storage-class                       StorageClass

      # metadata
      --metadata (supports JSON)            Metadata

      # grants
      --grants <value>...                   GrantFullControl
                                            GrantRead
                                            GrantReadACP
                                            GrantWriteACP

      # encryption
      --sse
      --sse-c
      --sse-c-copy-source
      --sse-c-copy-source-key
      --sse-c-key
      --sse-kms-key-id

      # not supported by copyObject
      --copy-props (see MetadataDirective)

      # requires S3P logic
      --follow-symlinks | --no-follow-symlinks

      # future
      --website-redirect                    WebsiteRedirectLocation

    copyObject:
      ACL: private | public-read | public-read-write | authenticated-read | aws-exec-read | bucket-owner-read | bucket-owner-full-control,
      CacheControl: 'STRING_VALUE',
      ContentDisposition: 'STRING_VALUE',
      ContentEncoding: 'STRING_VALUE',
      ContentLanguage: 'STRING_VALUE',
      ContentType: 'STRING_VALUE',

      ExpectedBucketOwner: 'STRING_VALUE',
      ExpectedSourceBucketOwner: 'STRING_VALUE',
      Expires: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
      Metadata: {},
      MetadataDirective: COPY | REPLACE,
      RequestPayer: requester,
      StorageClass: STANDARD | REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | OUTPOSTS,
      WebsiteRedirectLocation: 'STRING_VALUE'

      # grants
      GrantFullControl: 'STRING_VALUE',
      GrantRead: 'STRING_VALUE',
      GrantReadACP: 'STRING_VALUE',
      GrantWriteACP: 'STRING_VALUE',

      # encryption
      BucketKeyEnabled: true || false,
      CopySourceSSECustomerAlgorithm: 'STRING_VALUE',
      CopySourceSSECustomerKey: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      CopySourceSSECustomerKeyMD5: 'STRING_VALUE',
      SSECustomerAlgorithm: 'STRING_VALUE',
      SSECustomerKey: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      SSECustomerKeyMD5: 'STRING_VALUE',
      SSEKMSEncryptionContext: 'STRING_VALUE',
      SSEKMSKeyId: 'STRING_VALUE',
      ServerSideEncryption: AES256 | aws:kms,


      # not supported (directly) by aws cp
      ObjectLockLegalHoldStatus: ON | OFF,
      ObjectLockMode: GOVERNANCE | COMPLIANCE,
      ObjectLockRetainUntilDate: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
      Tagging: 'STRING_VALUE',
      TaggingDirective: COPY | REPLACE,
    ```

# Fixes and Improvements
- large-file copy support that doesn't require sys-execing "aws s3 cp"
  - https://www.npmjs.com/package/aws-s3-multipart-copy didn't work, but maybe it's source is a place to start
  - eliminate the dependency on aws-cli
    - aws-cli is currently used to copy "large" files. Files larger than 5gigabytes can't be copied with the standard copyObject API call, so aws-cli is used as a sub-processes.

- abort properly when 'found'
- S3P isn't optimized when comparing with toBucket and there are large lists of Keys not present in the source-bucket.
  - For a given source-bucket range, limited by the limit option, S3P creates an in-memory list of ALL keys in toBucket in the same range - without limit.
  - This could be solved by passing the source-bucket list to the toBucket-listing-code and have the to-bucket-listing code slice up the source-items to match limited batches from toBucket...