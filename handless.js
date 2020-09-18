// ./handles.js
// Necessary imports
const http = require('http')
const url = require('url')
const qs = require('querystring')
module.exports = {
  serverHandle : function (req, res) {
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
}
  