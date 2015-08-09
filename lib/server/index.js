"use strict";

import thrift from 'thrift';
import TagService from './services/tagService'

class Server {
    constructor() {
        this.processor = new thrift.MultiplexedProcessor();
        this.registerService(new TagService());
        this.server = thrift.createMultiplexServer(this.processor, {});
    }

    registerService(service) {
        this.processor.registerProcessor(service.name, new service.thriftService.Processor(service));
    }

    run(port) {
        this.server.listen(port);
    }
}

export default Server;
