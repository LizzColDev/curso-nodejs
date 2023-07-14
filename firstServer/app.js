const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('===> req (respuesta)');
    console.log(res.statusCode)
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders())
    
    console.log('Hello World')



});

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`The server is listening in http://localhost:${PORT}/...`);
}); 