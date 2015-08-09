var path = require('path');

var chai = require('chai');
var expect = exports.expect = chai.expect;
chai.should();

var libRequire = exports.libRequire = function(libPath) {
    return require(path.normalize(path.join(__dirname, "../../lib", libPath)));
}

var Server = exports.server = libRequire('server');
var Client = exports.client = libRequire('client');

