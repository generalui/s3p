# S3P - 5x to 50x faster than aws-cli

[![Actions Status](https://github.com/generalui/s3p/workflows/test/badge.svg)](https://github.com/generalui/s3p/actions)

S3P provides a radically faster way to copy, list, sync and do other bulk operations over large AWS S3 buckets.

You can use it as a command-line tool for common operations, or you can use it as a library for nearly anything you can imagine.

# Why is S3P so fast?

S3's API is structured around listing items in serial - request 1000 items, wait, then request the next 1000. This is how nearly all S3 tools work. S3P, however, can list items in parallel. It leverages S3's ability to request the first 1000 items equal-to or after a given key. Then, with the help of algorithmic bisection and some intelligent heuristics, S3P can scan the contents of a bucket with an arbitrary degree of parallism. In practice, S3P can list buckets up to **15x faster** than conventional methods.

S3P is really just a fancy, really fast, S3 listing tool. Summarizing, copying and synching are all boosted by S3P's core ability to list objects radically faster.

> We've sustained copy speeds up to **8gigabytes/second** between two buckets in the same region using a single EC2 instance to run S3P.

# S3P Blog Post

Read more about [S3P on Medium](https://medium.com/@shanebdavis/s3p-massively-parallel-s3-copying-9a9e466d0d74).

# Requirements

1. [NodeJS](https://nodejs.org/en/download/)
2. [AWS-CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

    The `aws-cli` is required for copying large files. By default, files larger than 100 megabytes are copied with `aws-cli`. This is a good compromise for performance. However, you can change that threshold to 5 gigabytes with the `--large-copy-threshold` option.
    > Why? The `aws-sdk` does not support coping files larger than 5 gigabytes without a much more complicated solution.

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

There is no need to install s3p directly. In environments like [AWS Cloudshell](https://aws.amazon.com/cloudshell/) where you have NodeJS installed, you can run s3p directly using `npx`.

The built in help details all the commands, options, and provides many examples:

```shell
# list commands and get overall help
npx s3p help
```

Use the `--help` option for detailed help and examples for each command:

```shell
# get specific command help and example uses
npx s3p cp --help
```

# Install NPM Package

You can also install s3p locally which will allow it to run faster.
```shell
# install s3p on your current machine
npm install s3p -g

# now it runs from the local install:
npx s3p help
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

> Yes, I've seen 9 gigabytes per second sustained! This was on a bucket with an average file size slightly larger than 100 megabytes. S3P was running on a single c5.2xlarge instance. By comparison, I've never seen aws-s3-cp get more than 150mB/s. That's over 53x faster.

The average file-size has a big impact on s3p's overall bytes-per-second:

|location | command | aws-cli | s3p              | speedup | average size |
|   -     |-        |-        |-                 |-        | - |
|local     | ls      | 2000 items/s  | 20000 items/s       | 10x    | n/a|
|local     | cp      | 30 mB/s       | 150 mB/s    | 5x    | 512 kB |
|ec2      | cp      | 150 mB/s      | 8 gB/s    | 54x    | 100 mB |

> S3P was developed to operate on buckets with millions of items and 100s of terabytes. Currently, S3P is still only a single-core NODE application. There are opportunities for even more massively parallel S3 operations by forking workers or even distributing the work across instances with something like Elastic-Queue. If someone needs solutions that are 100-1000x faster than aws-cli, let us know. We'd love to work with you.<br>-
shane@genui.com

# Developed

S3P was originally developed by [GenUI.com](https://www.genui.com/) in conjunction with [Resolution Bioscience, Inc.](http://www.resolutionbio.com/)
