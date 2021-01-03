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

# Fixes and Improvements
- large-file copy support that doesn't require sys-execing "aws s3 cp"
  - https://www.npmjs.com/package/aws-s3-multipart-copy didn't work, but maybe it's source is a place to start
  - eliminate the dependency on aws-cli
    - aws-cli is currently used to copy "large" files. Files larger than 5gigabytes can't be copied with the standard copyObject API call, so aws-cli is used as a sub-processes.

- abort properly when 'found'
- S3P isn't optimized when comparing with toBucket and there are large lists of Keys not present in the source-bucket.
  - For a given source-bucket range, limited by the limit option, S3P creates an in-memory list of ALL keys in toBucket in the same range - without limit.
  - This could be solved by passing the source-bucket list to the toBucket-listing-code and have the to-bucket-listing code slice up the source-items to match limited batches from toBucket...