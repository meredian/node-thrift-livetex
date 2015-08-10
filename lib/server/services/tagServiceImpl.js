"use strict";

import {TagService, Tag, IncorrectTag} from '../../thriftTypes'

import {thriftServiceName, thriftService} from '../../annotations';
import BaseServiceImpl from '../baseServiceImpl';

@thriftServiceName("TagService")
@thriftService(TagService)
class TagServiceImpl extends BaseServiceImpl {

    createTag(tag, result) {
        result(null, this.models.tag.create(tag));
    }

    getTag(tagId, result) {
        var tag = this.models.tag.get(tagId);
        if (tag) {
            result(null, tag);
        } else {
            result({incorrectTag: new IncorrectTag({id:tagId})});
        }
    }
}

export default TagServiceImpl;
