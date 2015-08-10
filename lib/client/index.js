"use strict";

import thrift from 'thrift';
import Promise from 'bluebird'
import TagService from './tagService.js';

class Client {
    constructor() {
        this.connection = null;
        this.multiplexer = null;
        this.services = [];
    }

    run(port) {
        this.connection = thrift.createConnection('localhost', port);
        this.multiplexor = new thrift.Multiplexer();
        this.registerService(new TagService(this.connection, this.multiplexor));
    }

    registerService(service) {
        service.importInterface(this)
        this.services.push(service);
    }

}

export default Client;
