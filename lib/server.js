var thrift = require('thrift');

var EntityTagger = require('./gen-nodejs/EntityTagger.js');
var ttypes = require('./gen-nodejs/EntityTagger_types');

var tags = {
    1: { id: 1, name: "foo" },
    2: { id: 2, name: "baz" },
    3: { id: 3, name: "programming" },
    4: { id: 4, name: "other" }
};

var entities = {
    1: { id: 1, name: "On foo", tags: [1, 3] },
    2: { id: 2, name: "Baz usage in development", tags: [2, 3] },
    3: { id: 3, name: "Other buzzwords in programming", tags: [3] }
};

var server = thrift.createServer(EntityTagger, {
  addEntityTag: function(entityId, tagId) {
    console.log("addEntityTag(%s, %s)", entityId, tagId);
    var entity = entities[entityId];
    if (entity && entity.tags.indexOf(tagId) < 0) {
        entity.tags.push(tagId);
    }
    result(null);
  },

  removeEntityTag: function(entityId, tagId) {
    console.log("removeEntityTag(%s, %s)", entityId, tagId);
    var entity = entities[entityId];
    if (entity && entity.tags.indexOf(tagId) >= 0) {
        entity.tags = entity.tags.filter(function(el) { return el != tagId });
    }
    result(null);
  }
}, {});

server.listen(9090);
