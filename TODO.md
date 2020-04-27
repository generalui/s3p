# Things To do

# Features
- s3p.copy - should retry retry-able errors... How can we tell? (I had an error which roughly equated to our clocks being out of sync with world-time - weird, but I expect it's probably because I had so many open copy requests, some timed out) - The answer, at least for now, was to add 'sync' capability so you could re-run they copy and pick up previous failures.
- support for S3 key characters outside the currently supported key chars:
    ```
    <space>
    !"#$%&'()*+,-./0123456789:;<=>?@
    ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`
    abcdefghijklmnopqrstuvwxyz{|}~
    ```

# Fixes and Improvements
- large-file copy support that doesn't require sys-execing "aws s3 cp"
- abort properly when 'found'