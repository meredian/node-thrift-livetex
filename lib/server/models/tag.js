let _storage = [];

var Tag = {};

Tag.create = function(tag) {
    var len = _storage.length;
    tag.id = [len + 1];
    _storage[len] = tag;
    return tag.id;
};

Tag.update = function(tag) {
    _storage[tag.id] = tag;
    return tag.id;
};

Tag.get = function(tagId) {
    return _storage[tagId - 1];
};

Tag.all = function() {
    return _storage;
};

export default Tag;
