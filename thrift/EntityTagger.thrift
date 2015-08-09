typedef i32 TagId
typedef i32 EntityId

struct Tag {
    1:TagId id = 0
    2:string name
}

struct Entity {
    1:EntityId id = 0
    2:string name
    3:optional list<TagId> tags
}

service EntityTagger {
    EntityId createEntity(1:Entity entity)
    TagId createTag(1:Tag tag)

    Entity getEntity(1:EntityId entityId)
    Entity getTag(1:TagId tagId)

    void addEntityTag(1:EntityId entityId, 2:TagId tagId)
    void removeEntityTag(1:EntityId entityId, 2:TagId tagId)

    list<Tag> getEntityTags(1:EntityId entityId)
    list<Entity> getEntitiesByTagList(1:list<string> tagIds)
}
