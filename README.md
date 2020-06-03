# S3P - 5x to 50x faster than aws-cli

S3P provides a radically faster way to copy, list sync and do other bulk operations over large AWS S3 buckets.

You can use it as a command-line tool for common operations, or you can use it as a library for nearly anything you can imagine.

S3P's key innovation is the ability to list the items in an S3 bucket in a massively parallel way. Instead of doing one list after another sequentially, as the aws-cli does, S3P divides the key-space and can have 100(*) or more simultaneous list operations running in parallel.

S3P is really just a fancy, really fast, s3 listing tool.

> (*) The default list-concurrency is 100, but you can set it higher.

# Requirements

1. [NodeJS](https://nodejs.org/en/download/)
2. [AWS-CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

    The aws-cli is required for copying large files. Large files are defined as >= 100 megabytes by default for performance reasons. However, you can up that threshold to 5 gigabytes with the large-copy-threshold option. **Files larger than 5 gigabytes can only be copied with the help of the aws-cli.** (Why? the aws-sdk does not support coping larger files without a much more complicated solution. TODO!)
3. Key names must use a limited character set:
    ```
    <space>
    !"#$%&'()*+,-./
    0123456789:;<=>?@
    ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`
    abcdefghijklmnopqrstuvwxyz{|}~
    ```
    > Why? Since Aws-S3 doesn't support listing Keys in descending order, S3P uses a character-range-based divide-and-conquer algorithm.

# AWS Credentials

s3p uses the same credentials aws-cli uses, so see their documentation: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html

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

- Only list files with a matching prefix, starting-after a given key, and/or stopping-at a given key. These options are very fast; the rest of the bucket not matching these criteria is ignored completely.
- Filter source files with arbitrary JavaScript. Further filter every file listed arbitrarily based on Key, Size, or Date. This is slower, since every file must be filtered in JavaScript but none-the-less, quite useful.
- When copying, syncing or comparing, re-key files by replacing prefixes, adding prefixes, or with an arbitrary JavaScript function.

# Performance

Surprisingly, you don't even need to run S3P in the cloud to see much of its benefits. You can run it on your local machine and, since S3 copying never goes directly through S3P, it doesn't use up any AWS bandwidth.

S3-bucket-listing performance can hit almost 20,000 items per second.

S3-bucket-copying performance can exceed 8 gigabytes per second.

> Yes, I've seen 8 gigabytes per second sustained! This was on a bucket with an average file size slightly larger than 100 megabytes. S3P was running on a single c5.2xlarge instance. By comparison, I've never seen aws-s3-cp get more than 150mB/s. That's over 53x faster.

The average file-size has a big impact on s3p's overall bytes-per-second:

|location | command | aws-cli | s3p              | speedup | average size |
|   -     |-        |-        |-                 |-        | - |
|local     | ls      | 2000 items/s  | 18000 items/s       | 9x    | n/a|
|local     | cp      | 30 mB/s       | 150 mB/s    | 5x    | 512 kB |
|ec2      | cp      | 150 mB/s      | 8 gB/s    | 54x    | 100 mB |

> S3P was developed to operate on buckets with millions of items and 100s of terabytes. Currently, S3P is still only a single-core NODE application. There are opportunities for even more massively parallel S3 operations by forking workers or even distributing the work across instances with something like Elastic-Queue. If someone needs solutions that are 100-1000x faster than aws-cli, let me know. We'd love to work with you.<br>-
shane@genui.com

# TODO

- support copying to/from the local file system
- eliminate the dependency on aws-cli
- document the API
- better CLI argument checking

# Developed

S3P was originally developed by [GenUI.com](https://www.genui.com/) in conjunction with [Resolution Bioscience, Inc.](http://www.resolutionbio.com/)