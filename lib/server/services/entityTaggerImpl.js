"use strict";

import {EntityTagger, IncorrectEntity, IncorrectTag} from '../../thriftTypes'

import {thriftService, thriftServiceName} from '../../annotations';
import BaseServiceImpl from '../baseServiceImpl';

@thriftService(EntityTagger)
@thriftServiceName("EntityTagger")
class EntityTaggerImpl extends BaseServiceImpl {
    addEntityTag(entityId, tagId, result) {
        let entity = this.models.entity.get(entityId);
        let tag = this.models.tag.get(tagId);
        if (!entity) {
            return result({incorrectEntity: new IncorrectEntity({id: entityId})});
        }
        if (!tag) {
            return result({incorrectTag: new IncorrectTag({id: tagId})});
        }
        if (!entity.tags) {
            entity.tags = [tag.id];
            this.models.entity.update(entity);
        } else {
            if (entity.tags.indexOf(tagId) < 0) {
                entity.tags.push(tagId);
                this.models.entity.update(entity);
            }
        }
        result(null);
    }

    removeEntityTag(entityId, tagId, result) {
        let entity = this.models.entity.get(entityId);
        let tag = this.models.tag.get(tagId);
        if (!entity) {
            return result({incorrectEntity: new IncorrectEntity({id: entityId})});
        }
        if (!tag) {
            return result({incorrectTag: new IncorrectTag({id: tagId})});
        }
        if (entity.tags) {
            entity.tags = entity.tags.filter((id) => { return id != tag.id });
            this.models.entity.update(entity);
        }
        result(null);
    }

    getEntityTags(entityId, result) {
        let entity = this.models.entity.get(entityId);
        if (!entity) {
            return result({incorrectEntity: new IncorrectEntity({id: entityId})});
        }
        let tags = (entity.tags || []).map((tagId) => {
            return this.models.tag.get(tagId);
        });
        result(null, tags);
    }

    getEntitiesByTagList(tagIds, result) {
        var incorrectTags = this.models.tag.rejectExistingIds(tagIds);
        if (incorrectTags.length) {
            return result({incorrectTag: new IncorrectTag({id: incorrectTags[0]})});
        }

        let entities = (this.models.entity.all()).filter((entity) => {
            return intersectArrays(entity.tags, tagIds).length;
        });
        result(null, entities);
    }

}

function intersectArrays(arr1, arr2) {
    return (arr1 || []).filter(function(n) {
        return (arr2 || []).indexOf(n) != -1
    });
};

export default EntityTaggerImpl;
