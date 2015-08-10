"use strict";

import ThriftEntityService from '../../gen-nodejs/EntityService';
import {IncorrectEntity} from '../../gen-nodejs/entityService_types';
import {IncorrectTag} from '../../gen-nodejs/tagService_types';

import {thriftService, thriftServiceName} from '../../annotations';
import BaseService from '../baseService';

@thriftService(ThriftEntityService)
@thriftServiceName("EntityService")
class EntityService extends BaseService {
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

export default EntityService;
