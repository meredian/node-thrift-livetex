include "tagService.thrift"

typedef i32 EntityId

struct Entity {
    1:EntityId id = 0
    2:string name
    3:optional list<tagService.TagId> tags
}

service EntityService {
    EntityId createEntity(1:Entity entity)
    Entity getEntity(1:EntityId entityId)
}
