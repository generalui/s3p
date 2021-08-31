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
- `--expires date-time` The date and time at which the object is no longer cacheable. e.g. `js:new Date` or `Wed Dec 31 1969
    16:00:00 GMT-0800 (PST)` or `123456789`
- `--request-payer string` Confirms that the requester knows that they will be charged for the request. Bucket owners need not
    specify this parameter in their requests.
- `--storage-class string` By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD
    storage class provides high durability and high availability. Depending on performance needs, you
    can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.
    Possible values include: STANDARD, REDUCED_REDUNDANCY, STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING,
    GLACIER, DEEP_ARCHIVE and OUTPOSTS

# 3.1

Added the programmatic API. See the [README](readme.md#API).