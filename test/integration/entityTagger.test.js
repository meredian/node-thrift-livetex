import {client} from './helper';

describe('EntityTagger', function() {
    describe('#addEntityTag', function() {
        xit('adds existing tag to existing entity', async function() {
            this.tag = await client.createTag({name: "random_tag"});
            this.entity = await client.createEntity({name: "random_entity"});

            console.log("Tag: %j, Entity: %j", this.tag, this.entity);

            client.addEntityTag(this.entity.id, this.tag.id);
            client.getEntity(this.entity.id).tags.should.inclue(tag.id);
        });
    });
});
