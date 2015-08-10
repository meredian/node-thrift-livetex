"use strict";

import ThriftEntityService from '../../gen-nodejs/EntityService'
import {Tag} from '../../gen-nodejs/entityService_types'

import {thriftService, thriftServiceName} from '../../annotations';
import BaseService from '../baseService';

@thriftService(ThriftEntityService)
@thriftServiceName("EntityService")
class EntityService extends BaseService {
    createEntity(entity, result) {
        result(null, this.models.entity.create(entity));
    }

    getEntity(entityId, result) {
        result(null, this.models.entity.get(entityId));
    }
}

export default EntityService;
