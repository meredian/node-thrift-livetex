"use strict";

import ThriftTagService from '../../gen-nodejs/TagService'
import {Tag} from '../../gen-nodejs/TagService_types'

import {thriftServiceName, thriftService} from '../../annotations';
import BaseService from '../baseService';

@thriftServiceName("TagService")
@thriftService(ThriftTagService)
class TagService extends BaseService {

    createTag(tag, result) {
        result(null, this.models.tag.create(tag));
    }

    getTag(tagId, result) {
        result(null, this.models.tag.get(tagId));
    }
}

export default TagService;
