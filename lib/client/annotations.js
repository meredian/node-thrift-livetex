function serviceInterface(target, name, descriptor) {
    target.serviceInterfaceMethods = target.serviceInterfaceMethods || [];
    target.serviceInterfaceMethods.push(name);
}

function serviceMethodImporter(target) {
    target.prototype.importInterface = function(importTarget) {
        this.serviceInterfaceMethods.forEach((method) => {
            importTarget[method] = this[method].bind(this);
        });
    };
}

export {serviceMethodImporter, serviceInterface};
