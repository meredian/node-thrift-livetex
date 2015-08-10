"use strict";

import ThriftTagService from '../../gen-nodejs/TagService'
import {Tag} from '../../gen-nodejs/TagService_types'

import {thriftServiceName, thriftService} from '../../annotations';
import BaseService from '../baseService';

@thriftServiceName("TagService")
@thriftService(ThriftTagService)
class TagService extends BaseService {
    constructor(processor) {
        super(processor);
        this.storage = [];
    }

    createTag(tag, result) {
        var len = this.storage.length;
        tag.id = [len + 1];
        this.storage[len] = tag;
        result(null, tag.id);
    }

    getTag(tagId, result) {
        result(null, this.storage[tagId - 1]);
    }
}

export default TagService;
