require('./es6ify');

var Server = require('./server/')
var server = module.exports = new Server();
server.run(process.env.SERVER_PORT || 9090);
