- clone the repo 
- install dependencies

npm run dev  - to start the app

visit -> http://localhost:7000/users



##Benchmarking

- npm i -g autocanon
- concurrent 200 connections
- overall - 100k requests

autocannon http://localhost:7000/users -c=200 -a=100000


RESULTs

┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 59 ms │ 66 ms │ 88 ms │ 95 ms │ 67.09 ms │ 7.34 ms │ 190 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬──────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg      │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼──────────┼─────────┼────────┤
│ Req/Sec   │ 5      │ 5      │ 2,999  │ 3,109  │ 2,857.63 │ 508.45  │ 5      │
├───────────┼────────┼────────┼────────┼────────┼──────────┼─────────┼────────┤
│ Bytes/Sec │ 199 kB │ 199 kB │ 120 MB │ 124 MB │ 114 MB   │ 20.3 MB │ 199 kB │
└───────────┴────────┴────────┴────────┴────────┴──────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 35

100k requests in 35.05s, 3.99 GB read





------------------------------------------------------------
:todo this takes time -> 

##Benchmarking

- npm i -g autocanon
- concurrent 200 connections
- overall - 10million requests

autocannon http://localhost:7000/users -c=200 -a=10000000

