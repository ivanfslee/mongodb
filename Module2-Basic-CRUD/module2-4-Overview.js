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
*/