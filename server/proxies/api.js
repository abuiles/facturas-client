var Proxy = require('http-proxy');

// For options, see:
// https://github.com/nodejitsu/node-http-proxy
var proxy = Proxy.createProxyServer({});

module.exports = function(app) {

  app.use('/', function(req, res, next){
    proxy.web(req, res, { target: 'http://localhost:3000' });
  })

};
