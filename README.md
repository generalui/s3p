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


# Performance

Listing performance can hit almost 20,000 items per second.

Copying can be as fast as 8gB/s. Yes, I've seen 8 gigabytes per second sustained! This was on a bucket with an average file size slightly larger than 100 megabytes. S3P was running on a single c5.2xlarge instance. By comparison, I've never seen aws-s3-cp get more than 150mB/s. That's over 53x faster.

Here are some other tests. Note that the copy was running on an average file size of 555k, which capped S3P's speed-up at just 5x. Still, a big win.

|location | command | items   | aws-cli | s3p              | speedup | average size |
|   -     |-        |-        |-        |-                 |-        | - |
|home     | ls      | 490838  | 2043/s  | 18179/s       | 8.6x    | |
|home     | cp      | 490838  | 30.5 mB/s     | 152mB/s    | 5.0x    | 555k |
