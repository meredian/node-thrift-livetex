"use strict";

import ThriftEntityService from '../../gen-nodejs/EntityService'
import {Entity} from '../../gen-nodejs/entityService_types'

import {thriftService, thriftServiceName, serviceInterface} from '../../annotations';
import BaseService from '../baseService';

@thriftService(ThriftEntityService)
@thriftServiceName("EntityService")
class EntityService extends BaseService {

    @serviceInterface
    async createEntity(args) {
        var entity = new Entity(args);
        entity.id = await this.client.createEntityAsync(entity);
        return entity;
    }
}

EntityService.generateInterfaceMethods(['getEntity']);

export default EntityService;

