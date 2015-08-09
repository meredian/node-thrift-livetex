var helper = require('./helper');
var client = helper.client;

describe('EntityTagger', function() {
    describe('#addEntityTag', function() {
        it('adds existing tag to existing entity', function() {
            this.tag = client.createTag({name: "random_tag"});
            this.entity = client.createEntity({name: "random_entity"});

            client.addEntityTag(this.entity.id, this.tag.id);
            client.getEntity(this.entity.id).tags.should.inclue(tag.id);
        });
    });
});
