include "tagService.thrift"

typedef i32 EntityId

struct Entity {
    1:EntityId id = 0
    2:string name
    3:optional list<tagService.TagId> tags
}

exception IncorrectEntity {
    1: EntityId id
}

service EntityService {
    EntityId createEntity(1:Entity entity) throws (1:tagService.IncorrectTag incorrectTag)
    Entity getEntity(1:EntityId entityId) throws (1:IncorrectEntity incorrectEntity)
}
