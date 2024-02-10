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

Running 100000 requests test @ http://localhost:7000/users
200 connections


┌─────────┬───────┬────────┬────────┬────────┬───────────┬───────────┬─────────┐
│ Stat    │ 2.5%  │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev     │ Max     │
├─────────┼───────┼────────┼────────┼────────┼───────────┼───────────┼─────────┤
│ Latency │ 38 ms │ 103 ms │ 138 ms │ 153 ms │ 106.39 ms │ 186.73 ms │ 9924 ms │
└─────────┴───────┴────────┴────────┴────────┴───────────┴───────────┴─────────┘
┌───────────┬─────────┬─────────┬────────┬────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%    │ 97.5%  │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼────────┼────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 103     │ 627     │ 1,849  │ 1,973  │ 1,723.87 │ 358.25  │ 103     │
├───────────┼─────────┼─────────┼────────┼────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 8.58 MB │ 52.2 MB │ 154 MB │ 164 MB │ 143 MB   │ 29.8 MB │ 8.57 MB │
└───────────┴─────────┴─────────┴────────┴────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 58

100k requests in 58.05s, 8.32 GB read
16 errors (16 timeouts)





------------------------------------------------------------
:todo this takes time -> 

##Benchmarking

- npm i -g autocanon
- concurrent 200 connections
- overall - 10million requests

autocannon http://localhost:7000/users -c=200 -a=10000000

