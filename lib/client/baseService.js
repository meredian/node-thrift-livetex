"use strict";

import Promise from 'bluebird';

class BaseService {
    constructor(connection, multiplexor) {
        if (!this.thriftServiceName) {
            throw new Error("thriftServiceName is missing for class");
        }

        if (!this.thriftService) {
            throw new Error("thriftService is missing for class");
        }

        this.client = Promise.promisifyAll(multiplexor.createClient(
            this.thriftServiceName,
            this.thriftService,
            connection
        ));
    }

    importInterface(importTarget) {
        this.serviceInterfaceMethods.forEach((method) => {
            importTarget[method] = this[method].bind(this);
        });
    };
}

export default BaseService;

