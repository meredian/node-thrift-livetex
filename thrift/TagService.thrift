typedef i32 TagId

struct Tag {
    1:TagId id = 0
    2:string name
}

exception IncorrectTag {
    1: TagId id
}

service TagService {
    TagId createTag(1:Tag tag)
    Tag getTag(1:TagId tagId) throws (1:IncorrectTag incorrectTag)
}
