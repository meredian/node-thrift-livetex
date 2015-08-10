"use strict";

import Promise from 'bluebird';

class BaseServiceProxy {
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

    static generateInterfaceMethods(names) {
        this.prototype.serviceInterfaceMethods = this.prototype.serviceInterfaceMethods || [];
        names.forEach((name) => {
            this.prototype[name] = async function() {
                return await this.client[name + 'Async'].apply(this.client, arguments);
            }
            this.prototype.serviceInterfaceMethods.push(name);
        })
    }
}

export default BaseServiceProxy;

