const http = require('http');

const server = http.createServer((req, res) =>{
  res.end('Hello world');
});

const PORT= 3000;

server.listen(PORT, ()=>{
  console.log(`Server is listenig in ${PORT}...`)
})