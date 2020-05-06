# S3P - 5x to 50x faster than aws-cli

S3P provides a radically faster way to do operations over S3 buckets with large numbers of items.

You can use it as a command-line tool for common operations, or you can use it as a library.

S3P's key innovation is the ability to list the items in an S3 bucket in a massively parallel way. Instead doing one list after another
sequentially as the aws-cli does, S3P bisects the key-space and can have as many as 100 simultaneous list operations running in parallel.

# Requirements

1. [NodeJS](https://nodejs.org/en/download/)
2. [AWS-CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

    The aws-cli is required for copying large files. By default, large files are defined as >= 100 megabytes. You can up that limit to 5 gigabytes with the large-copy-threshold option. Files larger than 5 gigabytes can only be copied with the help of the aws-cli. (Why? the aws-sdk does not support coping larger files without a much more complicated solution.)
3. Key names must use a limited character set:
    ```
    <space>
    !"#$%&'()*+,-./
    0123456789:;<=>?@
    ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`
    abcdefghijklmnopqrstuvwxyz{|}~
    ```
    > Why? Since Aws-S3 doesn't support listing Keys in descending order, S3P uses a character-range-based bisection algorithm.


# CLI

There is no need to install s3p directly. As long as you have NodeJS installed, you can run s3p directly using `npx`.

```shell
npx s3p help
```

# Install NPM Package


```shell
npm install s3p
```

# Features

In addition to performance, S3P provides flexible options for custom list, copying and comparing:

- Only list files with a matching prefix, starting-after a given key, and/or stoping-at a given key. These options are very fast; the rest of the bucket not matching these criteria is ignored completely.
- Filter source files with arbitrary JavaScript. Further filter every file listed arbitrarily based on Key, Size, or Date. This is slower, since every file must be filtered in JavaScript but none-the-less, quite useful.
- When copying, syncing or comparing, re-key files by replacing prefixes, adding prefixes, or with an arbitrary JavaScript function.

# Performance

Listing performance can hit almost 20,000 items per second.

Copying performance can exceed 8 gigabytes per second.

> Yes, I've seen 8 gigabytes per second sustained! This was on a bucket with an average file size slightly larger than 100 megabytes. S3P was running on a single c5.2xlarge instance. By comparison, I've never seen aws-s3-cp get more than 150mB/s. That's over 53x faster.

The average file-size has a big impact on s3p's overall bytes-per-second:

|location | command | aws-cli | s3p              | speedup | average size |
|   -     |-        |-        |-                 |-        | - |
|home     | ls      | 2000 items/s  | 18000 items/s       | 9x    | n/a|
|home     | cp      | 30 mB/s       | 150 mB/s    | 5x    | 512 kB |
|ec2      | cp      | 150 mB/s      | 8 gB/s    | 54x    | 100 mB |

# Developed

S3P was originally developed by [GenUI.com](https://www.genui.com/) in conjunction with [Resolution Bioscience, Inc.](http://www.resolutionbio.com/)