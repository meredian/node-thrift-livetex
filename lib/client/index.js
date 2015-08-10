"use strict";

import thrift from 'thrift';
import Promise from 'bluebird'
import {requireDir} from '../util';

let Services = requireDir(__dirname, './services');

class Client {
    constructor() {
        this.connection = null;
        this.multiplexer = null;
        this.services = {};
    }

    run(port) {
        this.connection = thrift.createConnection('localhost', port);
        this.multiplexer = new thrift.Multiplexer();
        this.services = Object.keys(Services).reduce((memo, name) => {
            let Service = Services[name];
            let service = memo[name] = new Service(this.connection, this.multiplexer);
            service.importInterface(this);
            return memo;
        }, {});
    }
}

export default Client;
