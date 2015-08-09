var thrift = require('thrift');
var async = require('async');

var EntityTagger = require('./gen-nodejs/entityTagger.js');
var ttypes = require('./gen-nodejs/entityTagger_types');

var connection = thrift.createConnection('localhost', 9090);
var client = thrift.createClient(EntityTagger, connection);

connection.on('error', function(err) {
  console.error(err);
});

async.waterfall([
    function(cb) { client.addEntityTag(3, 4, cb) }
], function(err, res) {
    if (err) {
        console.log(err)
    } else {
        console.log("addEntityTag complete!");
    }
    connection.end();
})
