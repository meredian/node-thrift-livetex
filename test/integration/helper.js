import path from 'path';
import chai from 'chai';
import chaiAsPromised from "chai-as-promised";
import mochawait from 'mochawait'
let expect = chai.expect;

chai.should();
chai.use(chaiAsPromised);

function libPath(filename) {
    return path.normalize(path.join(__dirname, "../../lib", filename))
}

function libRequire(filename) {
    return require(libPath(filename));
}

let server = libRequire('server');
let client = libRequire('client');

export {expect, server, client}
