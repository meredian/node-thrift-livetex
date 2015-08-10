import {client} from './helper';

describe('EntityTagger', function() {
    beforeEach(async function() {
        this.linkedTag = await client.createTag({name: "linked_tag"});
        this.newTag = await client.createTag({name: "new_tag"});
        this.entity = await client.createEntity({name: "random_entity", tags: [this.linkedTag.id]});
    });

    describe('#addEntityTag', function() {
        it('adds existing tag to existing entity', async function() {
            await client.addEntityTag(this.entity.id, this.newTag.id);
            let fetchedEntity = await client.getEntity(this.entity.id);
            fetchedEntity.tags.should.include(this.newTag.id);
        });
    });

    describe('#removeEntityTag', function() {
        it('removes existing tag from existing entity with this tag', async function() {
            await client.removeEntityTag(this.entity.id, this.linkedTag.id);
            let fetchedEntity = await client.getEntity(this.entity.id);
            fetchedEntity.tags.should.not.include(this.linkedTag.id);
        });
    });

    describe('#getEntityTags', function() {
        it('returns list of tags for entity', async function() {
            let tags = await client.getEntityTags(this.entity.id);
            tags.should.deep.equal([this.linkedTag]);
        });
    });

    describe('#getEntitiesByTagList', function() {
        it('returns list of entities by tag id list', async function() {
            let entities = await client.getEntitiesByTagList([this.linkedTag.id]);
            entities.should.deep.equal([this.entity]);
        });
    });
});
