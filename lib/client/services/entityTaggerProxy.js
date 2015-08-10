"use strict";

import {EntityTagger} from '../../thriftTypes'

import {thriftService, thriftServiceName, serviceInterface} from '../../annotations';
import BaseServiceProxy from '../baseServiceProxy';

@thriftService(EntityTagger)
@thriftServiceName("EntityTagger")
class EntityTaggerProxy extends BaseServiceProxy {

}

EntityTaggerProxy.generateInterfaceMethods([
    'addEntityTag',
    'removeEntityTag',
    'getEntityTags',
    'getEntitiesByTagList'
]);

export default EntityTaggerProxy;

