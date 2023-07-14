const http = require('http');

const {infoCourses} = require('./courses');

const server = http.createServer((req, res) =>{
  const {method} = req;

  switch(method){
    case 'GET':
      return handleRequestGet(req, res);
    case 'POST':
      return handleRequestPOST(req, res);
    default:
      res.statusCode = 501;
      return console.log(`The method can not be used by server: ${method} `)
      break;
  }
});

function handleRequestGet(req, res) {
  const path = req.url;

  if (path === '/') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end('Welcome to my first server and API, created with Node.js')

  } else if (path === '/courses'){
    return res.end(JSON.stringify(infoCourses))

  } else if (path === '/courses/programation'){
    return res.end(JSON.stringify(infoCourses.programation))
  }

  res.statusCode = 501
  res.end('The resource does not exist')
}

function handleRequestPOST (req, res){
  const path = req.url;

  if (path === '/courses/programation'){

    let body = '';

    req.on('data', content =>{
      body += content.toString();
    });

    req.on('end', () =>{
      console.log(body);

      body =  JSON.parse(body);

      console.log(typeof body)

      console.log(body.title)


      res.end('the server received a POST request to /courses/programation');
    })
    // return res.end('the server received a POST request to /courses/programation');
  }
}

const PORT = 3000
server.listen(PORT, () =>{
  console.log(`Server is listening in port ${PORT}...`)
});