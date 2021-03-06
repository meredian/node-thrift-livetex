import {client, expect} from './helper';
import {IncorrectTag} from '../../lib/thriftTypes'

describe('TagService', function() {
    describe('#createTag', function() {
        it('saves tag object', async function() {
            let createdTag = await client.createTag({name: "random_tag"});
            let fetchedTag = await client.getTag(createdTag.id);
            fetchedTag.should.deep.equal(createdTag);
        });
    });

    describe('#getTag', function() {
        it('throws InvalidTag on incorrect tag id', async function() {
            return client.getTag(-1).should.be.rejectedWith(IncorrectTag);
        });
    });
});
