import {client} from './helper';
import {IncorrectEntity} from '../../lib/gen-nodejs/entityService_types'
import {IncorrectTag} from '../../lib/gen-nodejs/tagService_types'

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

        it('throws IncorrectTag if incorrect tag id in tags', async function() {
            return client.createEntity({name: "random_entity", tags: [-1]}).should.be.rejectedWith(IncorrectTag);
        });
    });

    describe('#getEntity', function() {
        it('throws IncorrectEntity on incorrect entity id', async function() {
            return client.getEntity(-1).should.be.rejectedWith(IncorrectEntity);
        });
    });

});
