"use strict";

import {EntityService, IncorrectEntity, IncorrectTag} from '../../thriftTypes'

import {thriftService, thriftServiceName} from '../../annotations';
import BaseServiceImpl from '../baseServiceImpl';

@thriftService(EntityService)
@thriftServiceName("EntityService")
class EntityServiceImpl extends BaseServiceImpl {
    createEntity(entity, result) {
        if (entity.tags) {
            var incorrectTags = this.models.tag.rejectExistingIds(entity.tags);
            if (incorrectTags.length) {
                return result({incorrectTag: new IncorrectTag({id: incorrectTags[0]})});
            }
        }
        result(null, this.models.entity.create(entity));
    }

    getEntity(entityId, result) {
        var entity = this.models.entity.get(entityId);
        if (entity) {
            result(null, entity);
        } else {
            result({incorrectEntity: new IncorrectEntity({id: entityId})});
        }
    }
}

export default EntityServiceImpl;
