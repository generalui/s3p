# Things To do

- concurrency cap - two separate caps - s3.list and s3.cp
- s3p.copy - should retry retry-able errors... How can we tell? (I had an error which roughly equated to our clocks being out of sync with world-time - weird, but I expect it's probably because I had so many open copy requests, some timed out)
- large-file copy support (I have it penciled in, I just need to test it further.)
- sync vs copy - only copy files missing or wrong-size
- abort properly when 'found'