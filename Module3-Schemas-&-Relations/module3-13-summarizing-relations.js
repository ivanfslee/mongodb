/*
Data Relations Summary 

    You have 2 options:
        1. Nested/Embedded Documents
        2. References

Nested/Embedded Documents

    Group data together logically

    Great for data that belongs together and is
        not really overlapping with other data
    
    Avoid super-deep nesting (100+ levels) or
        extremely long arrays 
        (16mb size limit per document)

References

    Split data across collections
    
    Great for related but shared data as well as
        for data which is used in relations and
        standalone
    
    Allows you to overcome nesting and size limits
        (by creating new documents)

*/
