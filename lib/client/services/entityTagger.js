"use strict";

import ThriftEntityTagger from '../../gen-nodejs/EntityTagger'

import {thriftService, thriftServiceName, serviceInterface} from '../../annotations';
import BaseService from '../baseService';

@thriftService(ThriftEntityTagger)
@thriftServiceName("EntityTagger")
class EntityTagger extends BaseService {

    @serviceInterface
    async addEntityTag(entityId, tagId) {
        return await this.client.addEntityTagAsync(entityId, tagId);
    }

    @serviceInterface
    async removeEntityTag(entityId, tagId) {
        return await this.client.removeEntityTagAsync(entityId, tagId);
    }


    @serviceInterface
    async getEntityTags(entityId) {
        return await this.client.getEntityTagsAsync(entityId);
    }

    @serviceInterface
    async getEntitiesByTagList(entityId) {
        return await this.client.getEntitiesByTagListAsync(entityId);
    }

}

export default EntityTagger;

