"use strict";

import {TagService as ThriftTagService, Tag} from '../../thriftTypes'

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

