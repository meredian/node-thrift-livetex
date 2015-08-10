"use strict";

import thrift from 'thrift';
import {requireDir} from '../util';

let Services = requireDir(__dirname, './services');
let Models = requireDir(__dirname, './models');

class Server {
    constructor() {
        this.models = Models;
        this.processor = new thrift.MultiplexedProcessor();
        this.services = Object.keys(Services).reduce((memo, name) => {
            memo[name] = new Services[name](this.processor, this.models);
            return memo;
        }, {});
        this.server = thrift.createMultiplexServer(this.processor, {});
    }

    run(port) {
        this.server.listen(port);
    }
}

export default Server;
