require('./es6ify');

var Client = require('./client/');
var client = module.exports = new Client();
client.run(process.env.SERVER_PORT || 9090);
