include "tagService.thrift"
include "entityService.thrift"

service EntityTagger {
    void addEntityTag(1:entityService.EntityId entityId, 2:tagService.TagId tagId) throws (1:entityService.IncorrectEntity incorrectEntity, 2:tagService.IncorrectTag incorrectTag);
    void removeEntityTag(1:entityService.EntityId entityId, 2:tagService.TagId tagId) throws (1:entityService.IncorrectEntity incorrectEntity, 2:tagService.IncorrectTag incorrectTag);

    list<tagService.Tag> getEntityTags(1:entityService.EntityId entityId) throws (1:entityService.IncorrectEntity incorrectEntity)
    list<entityService.Entity> getEntitiesByTagList(1:list<tagService.TagId> tagIds) throws (1:tagService.IncorrectTag incorrectTag)
}
