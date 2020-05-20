/*
Data Types in Action
    
    Working with Data Types in MongoDB

        db.companies.insertOne({
            name: "Fresh Apples Inc",
            isStartup: true,
            employees: 33,
            funding: 12345678901234567890, 
            details: {ceo: 'Mark Super'},
            tags: [{title: 'super}, {title: 'perfect'}], 
            foundingDate: new Date(), //This will insert the current date
            insertedAt: new Timestamp() //This will insert the current time
        })

    In JavaScript, JavaScript doesn't differentiate 
        between integers (e.g. 33) 
        and floating point numbers (e.g. 33.12).

    If a value in mongoDb is 33, this would be stored
        as a 'double' or 'float' in mongoDb.
        That is, a normal floating point number, 
        with some imprecision.
        As opposed to a special precise data type with
            high precision.

    new Date() and new Timestamp() are built into the mongo shell.
        When using the mongoDB drivers, these functions may
        be different depending on the programming language
        you are using.


    Using findOne() results in: 
    
    db.companies.findOne()                                        
                                                                    
        {   "_id" : ObjectId("5ec4a5390fa42f579d9b02c5"),           
            "name" : "Fresh Apples Inc",                            
            "isStartup" : true,                                     
            "employees" : 33,                                       
            "funding" : 12345678901234567000,                       
            "details" : {                                           
                    "ceo" : "Mark Super"                            
            },                                                      
            "tags" : [                                              
                    {                                               
                            "title" : "super"                       
                    },                                              
                    {                                               
                            "title" : "perfect"                     
                    }                                               
            ],                                                      
            "foundingDate" : ISODate("2020-05-20T03:34:17.676Z"),   
            "insertedAt" : Timestamp(1589945657, 1)                 
        }                                                               
    
    ISODate - lists the day.
        T - marks the time in 24 hour notation. 
        . - Marks the timezone
    
    Timestamp - based on the current time in milliseconds.
        It also has an ordinal component, so if we insert 2
        elements at the same time, with insertMany(), 
        they would have different timestamps.
    
    In funding - we see that the number in mongoDB is
        different from the number we added. 

        The number we added - 12345678901234567890
        The number in mongodb - 12345678901234567000

    What happened is that we tried to store a number that was
        too big.
    
    JavaScript accepts a 64bit floating point and that number
        exceeded that.
    
    That is the issue you will run into if you store really 
        large numbers.
    
    To store really large numbers, you may have to store them
        separately, perhaps as a string. 

db.stats() command

        stats() is a utility method provided by the shell
            which outputs stats about the database
    
    Running db.stats() on our database returns:

        > db.stats()

        {       "db" : "companyData",
                "collections" : 2,
                "views" : 0,
                "objects" : 2,
                "avgObjSize" : 134.5,
                "dataSize" : 269,
                "storageSize" : 40960,
                "numExtents" : 0,
                "indexes" : 2,
                "indexSize" : 40960,
                "scaleFactor" : 1,
                "fsUsedSize" : 1038312333312,
                "fsTotalSize" : 1056544124928,
                "ok" : 1
        }
    
    When we put in a number into mongodb, it will store as
        a 64bit floating point number by default.

    If you use NumberInt() method - 
    
        db.numbers.insertOne({a: NumberInt(1)})

    This will create an int32 value rather than an int64 value.

    And int32 values take up less space than int64 values.

    Note: JavaScript doesn't differentiate between integers and floats


Check the type of a value stored in MongoDB using 'typeof'

        typeof db.numbers.findOne().a     //access the 'a' key

    This returns:  'number'

BSON types Documentation

    Goes over the different data types supported by mongodb
    
        https://docs.mongodb.com/manual/reference/bson-types/
        
*/