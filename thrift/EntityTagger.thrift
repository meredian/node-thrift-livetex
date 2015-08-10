include "TagService.thrift"
include "EntityService.thrift"

service EntityTagger {
    void addEntityTag(1:EntityService.EntityId entityId, 2:TagService.TagId tagId) throws (1:EntityService.IncorrectEntity incorrectEntity, 2:TagService.IncorrectTag incorrectTag);
    void removeEntityTag(1:EntityService.EntityId entityId, 2:TagService.TagId tagId) throws (1:EntityService.IncorrectEntity incorrectEntity, 2:TagService.IncorrectTag incorrectTag);

    list<TagService.Tag> getEntityTags(1:EntityService.EntityId entityId) throws (1:EntityService.IncorrectEntity incorrectEntity)
    list<EntityService.Entity> getEntitiesByTagList(1:list<TagService.TagId> tagIds) throws (1:TagService.IncorrectTag incorrectTag)
}
