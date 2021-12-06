### 快速生成代码

```shell
nest g controller cats
nest g service cats
nest g module cats
```

### 集成Swagger

文档地址： https://docs.nestjs.com/openapi/types-and-parameters

### mongodb启动

```shell
mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
ps aux | grep -v grep | grep mongod

pgrep mongo
kill pid
```

### 查看被占用端口

```shell
lsof -i tcp:8080
kill pid
```

### webstorm 调试教程

https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html#running

### nestjs返回给前端数据格式的封装

```shell
nest g f filter/httpException
```

```
100 "continue"
101 "switching protocols"
102 "processing"
200 "ok"
201 "created"
202 "accepted"
203 "non-authoritative information"
204 "no content"
205 "reset content"
206 "partial content"
207 "multi-status"
208 "already reported"
226 "im used"
300 "multiple choices"
301 "moved permanently"
302 "found"
303 "see other"
304 "not modified"
305 "use proxy"
307 "temporary redirect"
308 "permanent redirect"
400 "bad request"
401 "unauthorized"
402 "payment required"
403 "forbidden"
404 "not found"
405 "method not allowed"
406 "not acceptable"
407 "proxy authentication required"
408 "request timeout"
409 "conflict"
410 "gone"
411 "length required"
412 "precondition failed"
413 "payload too large"
414 "uri too long"
415 "unsupported media type"
416 "range not satisfiable"
417 "expectation failed"
418 "I'm a teapot"
422 "unprocessable entity"
423 "locked"
424 "failed dependency"
426 "upgrade required"
428 "precondition required"
429 "too many requests"
431 "request header fields too large"
500 "internal server error"
501 "not implemented"
502 "bad gateway"
503 "service unavailable"
504 "gateway timeout"
505 "http version not supported"
506 "variant also negotiates"
507 "insufficient storage"
508 "loop detected"
510 "not extended"
511 "network authentication required"
```
