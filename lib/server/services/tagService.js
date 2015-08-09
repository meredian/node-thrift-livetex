"use strict";

import ThriftTagService from '../../gen-nodejs/TagService'
import {Tag} from '../../gen-nodejs/TagService_types'

class TagService {
    constructor() {
        this.name = "TagService"
        this.storage = [];
        this.thriftService = ThriftTagService;
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
