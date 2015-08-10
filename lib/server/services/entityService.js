"use strict";

import ThriftEntityService from '../../gen-nodejs/EntityService'
import {Tag} from '../../gen-nodejs/entityService_types'

import {thriftService, thriftServiceName} from '../../annotations';
import BaseService from '../baseService';

@thriftService(ThriftEntityService)
@thriftServiceName("EntityService")
class EntityService extends BaseService {
    constructor(processor) {
        super(processor);
        this.storage = [];
    }

    createEntity(entity, result) {
        var len = this.storage.length;
        entity.id = [len + 1];
        this.storage[len] = entity;
        result(null, entity.id);
    }

    getEntity(entityId, result) {
        result(null, this.storage[entityId - 1]);
    }
}

export default EntityService;
