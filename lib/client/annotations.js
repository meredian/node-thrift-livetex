function serviceInterface(target, name, descriptor) {
    target.serviceInterfaceMethods = target.serviceInterfaceMethods || [];
    target.serviceInterfaceMethods.push(name);
}

export { serviceInterface }
