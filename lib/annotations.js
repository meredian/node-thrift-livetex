function serviceInterface(target, name, descriptor) {
    target.serviceInterfaceMethods = target.serviceInterfaceMethods || [];
    target.serviceInterfaceMethods.push(name);
}

function thriftServiceName(name) {
    return function(target) {
        target.prototype.thriftServiceName = name;
    }
}

function thriftService(service) {
    return function(target) {
        target.prototype.thriftService = service;
    }
}

export {thriftServiceName, thriftService, serviceInterface};
