import {client} from './helper';

describe('EntityService', function() {
    describe('#createEntity', function() {
        it('saves entity object', async function() {
            let createdEntity = await client.createEntity({name: "random_entity"});
            let fetcherEntity = await client.getEntity(createdEntity.id);
            fetcherEntity.should.deep.equal(createdEntity);
        });

        it('saves entity object with listed tags', async function() {
            let tag1 = await client.createTag({name: "tag_1"});
            let tag2 = await client.createTag({name: "tag_2"});
            let createdEntity = await client.createEntity({name: "random_entity", tags: [tag1.id, tag2.id]});
            let fetcherEntity = await client.getEntity(createdEntity.id);
            fetcherEntity.should.deep.equal(createdEntity);
        });
    });
});
