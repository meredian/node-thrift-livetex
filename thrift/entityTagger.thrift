include "tagService.thrift"
include "entityService.thrift"

service EntityTagger {
    void addEntityTag(1:entityService.EntityId entityId, 2:tagService.TagId tagId)
    void removeEntityTag(1:entityService.EntityId entityId, 2:tagService.TagId tagId)

    list<tagService.Tag> getEntityTags(1:entityService.EntityId entityId)
    list<entityService.Entity> getEntitiesByTagList(1:list<tagService.TagId> tagIds)
}
