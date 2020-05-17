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

        e.g. {hobbies: ['sports', 'cooking','painting']} - document that has an array of strings
        e.g. [{...}, {...}, {...}] - array of embedded documents
        e.g. [1,23,4,5,6] - array of numbers


Working with Nested/Embedded Documents

    Here, we add another property called 'status' 
        that contains an embedded document.
        The embedded doc has 2 properties, 
        'description' and 'lastUpdated'

        db.flightData.updateMany({}, {$set: 
            {
                status: { 
                    description: "on-tine",
                    lastUpdated: "1 hour ago"
                }
            }
        })
    
    
    The resulting document will look like so:

        {   
            "_id": ObjectId("sldjfsdlfj"),
            "departureAirport": "MUC",
            "arrivalAirport": "SFO",
            "aircraft": "Airbus A380",
            "distance": 12000,
            "intercontinental": true
            "status": { 
                "description": "on-tine",
                "lastUpdated": "1 hour ago"
            }          
        }
    
    We can add another embedded document doing the same thing:

        db.flightData.updateMany({}, {$set: 
            {
                status: { 
                    description: "on-tine",
                    lastUpdated: "1 hour ago",
                    details: {
                        responsible: "Ivan Lee"
                    }
                }
            }
        })
    
    That results in:

        {   
            "_id": ObjectId("sldjfsdlfj"),
            "departureAirport": "MUC",
            "arrivalAirport": "SFO",
            "aircraft": "Airbus A380",
            "distance": 12000,
            "intercontinental": true
            "status": { 
                "description": "on-tine",
                "lastUpdated": "1 hour ago",
                "details": {
                    "responsible": "Ivan Lee"
                }
            }          
        }

Working with arrays - Storing Arrays of data
    
        We will work with our passengers collection for this example.

    A portion of our passengers collection looks like so:

        }

            "_id" : ObjectId("5ec058f4e1ec51bd5e94ddbb"),
            "name" : "Armin Glutch",
            "age" : 35
        }

            "_id" : ObjectId("5ec058f4e1ec51bd5e94ddbc"),
            "name" : "Klaus Arber",
            "age" : 53
        }

            "_id" : ObjectId("5ec058f4e1ec51bd5e94ddbd"),
            "name" : "Albert Twostone",
            "age" : 68
        }
    
    We add a 'hobbies' property to one of the documents:

    db.passengers.updateOne({name: "Albert Twostone"}, {$set: 
        {
            hobbies: [
                'sports',
                'cooking',
                {someObject: 'someString'},
                3
            ]          
        }
    })


    The resulting document looks like this:

    {
        "_id" : ObjectId("5ec058f4e1ec51bd5e94ddbd"),              
        "name" : "Albert Twostone",                                
        "age" : 68,                                                
        "hobbies" : [                                              
                "sports",                                          
                "cooking",                                         
                {                                                  
                  "someObject" : "someString"                
                },                                                 
                3                                                  
        ]                                                          
    }

    As we can see then, we can store arrays inside a document.
        And inside those arrays, you can store 
        strings, numbers, and even other documents

Accessing Structured Data and arrays

    Let's access the 'hobbies' array we just added.
    Note: We need to use 'findOne()' because that will give us access to 
        the doc's properties.
        If we use 'find()', it will not work

        db.passengers.findOne({name: "Albert Twostone"}).hobbies

        This would return the 'hobbies' array:

            ["sports", "cooking", {"someObject": "someString"}, 3]
    
    If we want to find all passengers with the 'hobby' of 'sports'

        db.passengers.find({hobbies: "sports"}).pretty()
    
    So, from the last example mongo can go through the 
        'hobbies' array and look for "sports" value.
    

Accessing embedded documents

    Given our flights data document that has an embedded doc:

        {   
            "_id": ObjectId("sldjfsdlfj"),
            "departureAirport": "MUC",
            "arrivalAirport": "SFO",
            "aircraft": "Airbus A380",
            "distance": 12000,
            "intercontinental": true
            "status": { 
                "description": "on-tine",
                "lastUpdated": "1 hour ago",
                "details": {
                    "responsible": "Ivan Lee"
                }
            }          
        }  
    

    If we want to see which documents have 'description' property
        that has a value of 'on-time', we use this query:

            db.flightData.find({"status.description": "on-time"}).pretty()

        We use dot notation to access embedded documents and that
            is wrapped around double quotation marks, so we get:
            
                "status.description"
    
    To go further into our embedded doc:

            db.flightData.find({"status.details.responsible": "Ivan Lee"}).pretty()

        This query will see which doc has 'responsible' set to 'Ivan Lee'

*/