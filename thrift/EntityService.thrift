include "TagService.thrift"

typedef i32 EntityId

struct Entity {
    1:EntityId id = 0
    2:string name
    3:optional list<TagService.TagId> tags
}

exception IncorrectEntity {
    1: EntityId id
}

service EntityService {
    EntityId createEntity(1:Entity entity) throws (1:TagService.IncorrectTag incorrectTag)
    Entity getEntity(1:EntityId entityId) throws (1:IncorrectEntity incorrectEntity)
}
