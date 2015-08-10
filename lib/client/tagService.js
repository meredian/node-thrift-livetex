"use strict";

import Promise from 'bluebird';

import ThriftTagService from '../gen-nodejs/TagService'
import {Tag} from '../gen-nodejs/tagService_types'

import {serviceInterface} from './annotations'

class TagService {
    constructor(connection, multiplexor) {
        this.client = Promise.promisifyAll(multiplexor.createClient("TagService", ThriftTagService, connection));
    }

    importInterface(target) {
        this.serviceInterfaceMethods.forEach((method) => {
            target[method] = this[method].bind(this);
        });
    }

    @serviceInterface
    async createTag(args) {
        var tag = new Tag(args);
        tag.id = await this.client.createTagAsync(tag);
        return tag;
    }

    @serviceInterface
    async getTag(tagId) {
        return await this.client.getTagAsync(tagId);
    }
}

export default TagService;

