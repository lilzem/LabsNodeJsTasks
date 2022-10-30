import http from "node:http";

const server = http.createServer((req, res) => {
  res.end("started");
  console.log("zxc");
});

server.listen(4308);
