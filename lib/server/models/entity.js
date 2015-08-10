let _storage = [];

var Entity = {};

Entity.create = function(entity) {
    var len = _storage.length;
    entity.id = [len + 1];
    _storage[len] = entity;
    return entity.id;
};

Entity.update = function(entity) {
    _storage[entity.id] = entity;
    return entity.id;
};

Entity.get = function(entityId) {
    return _storage[entityId - 1];
};

export default Entity;
