"use strict";

import {EntityService as ThriftEntityService, Entity} from '../../thriftTypes'

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

