"use strict";

class BaseServiceImpl {
    constructor(processor, models) {
        if (!this.thriftServiceName) {
            throw new Error("thriftServiceName is missing for class");
        }

        if (!this.thriftService) {
            throw new Error("thriftService is missing for class");
        }
        processor.registerProcessor(this.thriftServiceName, new this.thriftService.Processor(this));
        this.models = models
    }
}

export default BaseServiceImpl;
