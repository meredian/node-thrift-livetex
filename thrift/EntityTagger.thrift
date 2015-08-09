typedef i32 TagId
typedef i32 EntityId

struct Tag {
    1:TagId id
    2:string name
}

struct Entity {
    1:EntityId id
    2:string name
    3:list<TagId> tags
}

service EntityTagger {
    void addEntityTag(1:EntityId entityId, 2:TagId tagId)
    void removeEntityTag(1:EntityId entityId, 2:TagId tagId)

    list<Tag> getEntityTags(1:EntityId entityId)
    list<Entity> getEntitiesByTagList(1:list<string> tagIds)
}
