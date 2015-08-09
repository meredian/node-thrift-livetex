import {client} from './helper';

describe('TagService', function() {
    describe('#createTag', function() {
        it('saves tag object', async function() {
            let createdTag = await client.createTag({name: "random_tag"});
            let fetchedTag = await client.getTag(createdTag.id);
            fetchedTag.should.deep.equal(createdTag);
        });
    });
});
