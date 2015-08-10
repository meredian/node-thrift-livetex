"use strict";

import ThriftEntityTagger from '../../gen-nodejs/EntityTagger'

import {thriftService, thriftServiceName, serviceInterface} from '../../annotations';
import BaseService from '../baseService';

@thriftService(ThriftEntityTagger)
@thriftServiceName("EntityTagger")
class EntityTagger extends BaseService {

}

EntityTagger.generateInterfaceMethods([
    'addEntityTag',
    'removeEntityTag',
    'getEntityTags',
    'getEntitiesByTagList'
]);
export default EntityTagger;

