/*
Understanding Projection

    In database, you have this document:

    {
        "_id": "...",
        "name": "Max",
        "age": 29,
        "job": "instructor"
    }


    In your application, you may not need the other data,
        you may just need name and age:

    {
        "name": "Max",
        "age": 29
    }

    Every programming language has ways of filtering/
        manipulating the data it receives from servers
        and databases.

    The downside to getting the entire document, 
        including data you may not need is that it 
        can affect your bandwidth.
        And you would fetch uncessary data.
    
    So it might be better to filter this out on the
        mongodb server side.
    
        This is what 'Projection' can help with.
    

Projection Syntax

        db.passengers.find({}, {name: 1, _id: 0}).pretty()
    
    So the empty curly brackets '{}' is the first argument.
        We want to find all passengers.
    
    We don't want to pass a filter for the first argument.
        We want to find all passengers.
    
    The second argument, {name: 1, _id: 0}, allows us to project.
        Here, the project is set up by passing another object.
        Here, you specify which key/value pairs in the documents,
        that you want to get.

    In this example, we want the 'name' field. 
    And nothing else. 

    The only exception is the '_id', which is included by default.
        So, we have to explicitly tell mongo, we don't want it.
        Everything else is only included if we specify so.
        That is, everything else is excluded (except '_id')

    The '1' value means to include the property in the data
        mongo will return to me from initiating the 'find()' method.    
    
    This filtering/transformation is occuring on the mongoDB server.
        This happens before the data leaves the database server.
    
    You don't get unecessary data and any data that you don't want.
        You don't impact your bandwidth. 

Embedded Documents

    Documents where a property/field's value is another document.

    These documents can further have other sub documents.

    Basically, you can nest your documents into one document.

    You can have up to 100 levels of nesting in mongoDB.

    Typically, you rarely need more than 3-4 levels of nesting.
    
    The other hard limit is that the document size must be below
        16 megabytes.

    You only store text in mongoDB.
        You don't store files in mongoDB.
    
    Another kind of data you can store are arrays.
        You can have arrays of embedded documents.
        But arrays can hold any data.
*/