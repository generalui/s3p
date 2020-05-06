# S3P

S3P provides a radically faster way to do operations over S3 buckets with large numbers of items.

You can use it as a command-line tool for common operations, or you can use it as a library.

S3P's key innovation is the ability to list the items in an S3 bucket in a massively parallel way. Instead doing one list after another
sequentially as the aws-cli does, S3P bisects the key-space and can have as many as 100 simultaneous list operations running in parallel.

# Requirements

1. [NodeJS](https://nodejs.org/en/download/)
2. [AWS-CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

    The aws-cli is required for copying large files. By default, large files are defined as >= 100 megabytes. You can up that limit to 5 gigabytes with the large-copy-threshold option. Files larger than 5 gigabytes can only be copied with the help of the aws-cli. (Why? the aws-sdk does not support coping larger files without a much more complicated solution.)
3. Key names must use a limited character set:
    ```
    <space>
    !"#$%&'()*+,-./
    0123456789:;<=>?@
    ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`
    abcdefghijklmnopqrstuvwxyz{|}~
    ```