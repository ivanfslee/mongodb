/*
Data Relations Summary 

    Your approach always depends on your use-case
        and application needs.
        - how do you use your data
        - how often do I use it
        - how often you change data
        - how is the data related - one-to-one, one-to-many, many-to-many
        - if snapshot data does suffice
        - if you need the most current data available always
        - how much data you have

    You have 2 options:
        1. Nested/Embedded Documents
        2. References

Nested/Embedded Documents

    Group data together logically
        -Great for data that belongs together
        -one-to-many or one-to-one relations

    Great for data that belongs together and is
        not really overlapping with other data
        - no many-to-many relations
        - less than 16mb and 100 nesting limits
        - You don't need to split your data for application needs

    Avoid super-deep nesting (100+ levels) or
        extremely long arrays 
        (16mb size limit per document)

References

    Split data across collections
    
    Great for related but shared data as well as
        for data which is used in relations and
        standalone
        -good for many-to-many relations
        -good for data where you would have alot of 
            duplicates that you need to update alot
            (which you want to avoid, so you use references)
        
    Allows you to overcome nesting and size limits
        (by creating new documents)
        - if you run into the issue of documents
            reaching 16mb or 100+ nesting, then 
            you should use references to split
            the data across multiple documents/collections

*/
