import {client} from './helper';
import {IncorrectEntity} from '../../lib/gen-nodejs/entityService_types'
import {IncorrectTag} from '../../lib/gen-nodejs/tagService_types'

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

        it('does nothing if tag already linked to entity', async function() {
            await client.addEntityTag(this.entity.id, this.linkedTag.id);
            let fetchedEntity = await client.getEntity(this.entity.id);
            fetchedEntity.tags.should.include(this.linkedTag.id);
        });

        it('throws IncorrectTag on incorrect tag id', async function() {
            return client.addEntityTag(this.entity.id, -1).should.be.rejectedWith(IncorrectTag);
        });

        it('throws IncorrectEntity on incorrect entity id', async function() {
            return client.addEntityTag(-1, this.newTag.id).should.be.rejectedWith(IncorrectEntity);
        });
    });

    describe('#removeEntityTag', function() {
        it('removes existing tag from existing entity with this tag', async function() {
            await client.removeEntityTag(this.entity.id, this.linkedTag.id);
            let fetchedEntity = await client.getEntity(this.entity.id);
            fetchedEntity.tags.should.not.include(this.linkedTag.id);
        });

        it('does nothing if tag already not linked to entity', async function() {
            await client.removeEntityTag(this.entity.id, this.newTag.id);
            let fetchedEntity = await client.getEntity(this.entity.id);
            fetchedEntity.tags.should.not.include(this.newTag.id);
        });

        it('throws IncorrectTag on incorrect tag id', async function() {
            return client.removeEntityTag(this.entity.id, -1).should.be.rejectedWith(IncorrectTag);
        });

        it('throws IncorrectEntity on incorrect entity id', async function() {
            return client.removeEntityTag(-1, this.linkedTag.id).should.be.rejectedWith(IncorrectEntity);
        });
    });

    describe('#getEntityTags', function() {
        it('returns list of tags for entity', async function() {
            let tags = await client.getEntityTags(this.entity.id);
            tags.should.deep.equal([this.linkedTag]);
        });

        it('throws IncorrectEntity on incorrect entity id', async function() {
            return client.getEntityTags(-1).should.be.rejectedWith(IncorrectEntity);
        });
    });

    describe('#getEntitiesByTagList', function() {
        it('returns list of entities by tag id list', async function() {
            let entities = await client.getEntitiesByTagList([this.linkedTag.id]);
            entities.should.deep.equal([this.entity]);
        });

        it('throws IncorrectTag on incorrect tag id in list', async function() {
            return client.getEntitiesByTagList([-1]).should.be.rejectedWith(IncorrectTag);
        });
    });
});
