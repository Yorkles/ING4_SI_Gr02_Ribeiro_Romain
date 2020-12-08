str = "Hello NodffeJS!"
console.log(str)
// Import a module
const http = require('http')
const url = require('url')
const qs = require('querystring')
const handles = require('./handless')

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


 
  const server = http.createServer(handles.serverHandle);
  server.listen(8080)
// curl localhost:8080 or go to http://localhost:8080