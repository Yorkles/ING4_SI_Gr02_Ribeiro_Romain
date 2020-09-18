str = "Hello NodffeJS!"
console.log(str)
// Import a module
const http = require('http')
const url = require('url')
const qs = require('querystring')
const handles = require('./handless')



/*const serverHandle = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World challa j fini vanat demain mdr\n');
  }
  */

// Declare an http server
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'         <p>Hello World !</p>' +
'    </body>' +
'</html>'
/*
const serverHandle = function (req, res) {

     // Retrieve and print the current path
  const path = url.parse(req.url).pathname;
  console.log(path);
  const queryParams = qs.parse(url.parse(req.url).query);
  console.log('la requete wsh:');
  console.log(queryParams);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);

  
  res.end();
}
const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params && params['name']=='Romain') {
    res.write('Hello my name is Romain and rigth im not sure to understand properly waht im doing lol')
  } else {
    if (path === '/hello' && 'name' in params) {
      res.write('Hello$' + params['name']+ 'we dont know you')
    }else {res.write('404 not found')}

    
  }

  res.end();
}
*/


 
  const server = http.createServer(handles.serverHandle);
  server.listen(8080)
// curl localhost:8080 or go to http://localhost:8080