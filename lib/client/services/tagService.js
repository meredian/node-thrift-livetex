"use strict";

import Promise from 'bluebird';

import ThriftTagService from '../../gen-nodejs/TagService'
import {Tag} from '../../gen-nodejs/tagService_types'

import {serviceMethodImporter, serviceInterface} from '../annotations'

@serviceMethodImporter
class TagService {
    constructor(connection, multiplexor) {
        this.client = Promise.promisifyAll(multiplexor.createClient("TagService", ThriftTagService, connection));
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

