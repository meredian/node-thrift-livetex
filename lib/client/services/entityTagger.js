"use strict";

import ThriftEntityTagger from '../../gen-nodejs/EntityTagger'

import {thriftService, thriftServiceName, serviceInterface} from '../../annotations';
import BaseService from '../baseService';

@thriftService(ThriftEntityTagger)
@thriftServiceName("EntityTagger")
class EntityTagger extends BaseService {

    @serviceInterface
    async addEntityTag(entityId, tagId) {
        return await this.client.addEntityTag(entityId, tagId);
    }

    @serviceInterface
    async removeEntityTag(entityId, tagId) {
        return await this.client.removeEntityTag(entityId, tagId);
    }

}

export default EntityTagger;

