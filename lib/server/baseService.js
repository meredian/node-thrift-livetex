"use strict";

class BaseService {
    constructor(processor) {
        if (!this.thriftServiceName) {
            throw new Error("thriftServiceName is missing for class");
        }

        if (!this.thriftService) {
            throw new Error("thriftService is missing for class");
        }

        processor.registerProcessor(this.thriftServiceName, new this.thriftService.Processor(this));
    }
}

export default BaseService;
