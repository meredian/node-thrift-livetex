"use strict";

import Promise from 'bluebird';

import ThriftTagService from '../../gen-nodejs/TagService'
import {Tag} from '../../gen-nodejs/tagService_types'

import {thriftServiceName, thriftService, serviceInterface} from '../../annotations';
import BaseService from '../baseService';

@thriftServiceName("TagService")
@thriftService(ThriftTagService)
class TagService extends BaseService {

    @serviceInterface
    async createTag(args) {
        var tag = new Tag(args);
        tag.id = await this.client.createTagAsync(tag);
        return tag;
    }
}

TagService.generateInterfaceMethods(['getTag']);

export default TagService;

