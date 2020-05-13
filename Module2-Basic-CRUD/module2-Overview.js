//Inside this module:
    //Basics about Collections and Documents

    //Basic Data Types in MongoDB

    //Perform CRUD Operations

//Start up mongodb server
    // mongod --dbpath "C:\data\db"
    // If you want to use a different port (the default is 27017)
        //type 'mongod --dbpath "L:\data\db" --port <some other port number>'

//Connect with mongodb server
    //Type 'mongo'
    //If you changed the port then you type 'mongo --port <the port you are using>'

//Collections and Documents are created implicitly
    //That is, they don't need to be configuired.
    //They are configuired automatically when you insert data
    //Later, we can learn how to configure them manually

    //Note: A 'collection' in mongodb is analogous to a 'table' in a SQL database

//To add data:
    //Go into your database:
        //use <db name>
    //Display all collections in the db:
        //show collections
    //Add one data entry:
        //db.<collection name>.insertOne({<key:value data pair you want to insert>})

    //Note: A 'document' is always defined by '{}' curly braces
    //Note: We are NOT creating a JavaScript Object, but a JSON document
        //and JSON documents are also delimited by curly braces '{}'

//JSON document structure:
    //Keys are surrounded by double quotes
        //If you omit them, they will be added by mongoDB
    //Values - can be:
        //strings - must be surrounded by double quotes
        //numbers
        //boolean
        //objects
        //arrays

    //Example JSON document:
        // {
        //     "departureAirport": "MUC",
        //     "arrivalAirport": "SFO",
        //     "aircraft": "Airbus A380",
        //     "distance": 12000,
        //     "intercontinental": true
        // }

//When you add a document to your database, 
    //mongodb assigns a unique 'ObjectId' to the document

    //Example:
    //{"_id": ObjectId("434ljk34jhkh2k34h23")}

    //The key is "_id" 
    //The value is of type 'ObjectId'

    //The ObjectId allows sorting, it has time stamp data, 
        //amongst other things
        
//To display all documents in a collection:
    //db.<collection name>.find().pretty()

/*
JSON vs. BSON

    Mongo does not use JSON but it uses BSON to store data in database

    BSON = Binary JSON

    But we pretty much write JSON code

    JSON is also what we see when we retrieve data from mongoDB

    Behind the scenes/under the hood MongoDB actually uses BSON data

    JSON -> MongoDB Drivers -> Binary Data

    The conversion is done by the MongoDB Drivers

    It takes your JSON code and stores it in binary data.

    This is done because it is more efficient to store than JSON data.
        So it is fast and more efficient.

    BSON also supports additional types. 
        e.g. ObjectId type
    
    ObjectId data type is not normal, valid JSON

    The ObjectId data type is not valid JSON, but mongoDB 
        can take it and store it in its binary data
    
    BSON also support multiple different number types
        e.g. decimals, very large numbers

    So BSON allows you additional data types (ObjectId, number types, etc)
        and more efficient storage than JSON
    
    We write JSON when inserting a document into the DB, but behind the scenes, it is BSON.

    The Key names don't need to be wrapped in double quotes.
    The double quotes will be added in.

    Your documents in the same collection can have different Keys.

    That is, documents in a collection can have entirely different structures (schema).

    Often, you will have some overlap in different documents in a collection, 
        but it is not a must in mongoDB.
    
    Note: You can assign the ObjectId and its value on your own. So long as the _id value is unique.
        e.g. db.flightData.insertOne({departureAirport: "TXL", arrivalsAirport: "LHRU", "_id": "txl-lhr-1" })

    If you try to use the same ObjectId value again, you will get a duplicate key error.


CRUD Operations- Overview
    Core CRUD operations 

        In the end, these 4 operations (CRUD) are the 
        only thing you do with your data.

    You can use MongoDB for a variety of use cases:
        Application
        Analytics/BI Tools
        Database Admin


        Application
            You might have an app, a mobile app or website,
            where the user interacts with your code.

            And your code uses its appropriate MongoDB driver (e.g. Node, c++, python, etc)

            You need to be able to Create/Read/Update/Delete documents

        Analytics/BI Tools
            You might get some data given to you, shipped as one file,
            and you need to run analytics on it.

            BI = business intelligence connector - mongo offers you this

            Or you might use the shell 

            You need to be able to Read the data

        Admin
            You are a Database Administrator

            You will work with the shell

            You need to be able to Create/Read/Update/Delete data

Assigning an "_id" manually:

Note: You can assign the ObjectId and its value on your own. So long as the _id value is unique.
        e.g. db.flightData.insertOne({departureAirport: "TXL", arrivalsAirport: "LHRU", "_id": "txl-lhr-1" })

The following operations are all directly executed on a collection:

    Create Operations
        1. insertOne(data, options)
        
        2. insertMany(data, options)

    Read Operations
        1. find(filter, options)
        
        Note: filter allows you to narrow down the data set

        2. findOne(filter, options)

        find - finds all matching documents
        findONe - finds the first matching document

    Update Operations
        1. updateOne(filter, data, options)

        2. updateMany(filter, data, options)

        3. replaceOne(filter, data, options)

    Delete Operations
        1. deleteOne(filter, options)

        2. deleteMany(filter, options)

Let's say your database has a collection called 'flightData'
    and it has the following documents:

db.flightData.find().pretty()
{
    "_id": ObjectId("5b97827de62da95ae64206a8"),
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true
}
{
    "_id": ObjectId("5b9783d7e62da95ae64206a9"),
    "departureAirport": "TXL",
    "arrivalAirport": "LHR"
}
{
    "_id": "txl-lhr-1",
    "departureAirport": "TXL",
    "arrivalAirport": "LHR"
}

To delete one document in a collection:
    Note: These commands act on a collection

    filter is the first argument in the deleteOne method - 
    filter is a document

    In a filters simplest form, we 
    define a key and value we want to delete
    
        db.flightData.deleteOne({"departureAirport": "TXL"})

    So, this will delete the FIRST document that has "departureAirport": "TXL" as a key/value pair

    If the deletion works, mongoDB should return:

        { "acknowledged" : true, "deletedCount" : 1}


To delete many documents, you need to have documents that have key/values in common.
    
    Whenever you see '$' in mongodb, that indicates a reserved key word operator

    Let's select a document and add a property to it:

    db.flightData.updateOne({distance: 12000}, {$set: {marker: "delete"}})

    So this will select the FIRST document with {distance: 12000} property
    and set/add another property {marker: "delete"} into that document.

    If document already has a 'marker' property. It will change the value to 'delete'.
    If document does not have 'marker' property. It will add {marker: "delete"}.

    So after updateOne(), this document:
    {
        "_id": ObjectId("5b97827de62da95ae64206a8"),
        "departureAirport": "MUC",
        "arrivalAirport": "SFO",
        "aircraft": "Airbus A380",
        "distance": 12000,
        "intercontinental": true
    }

    Becomes:
    {
        "_id": ObjectId("5b97827de62da95ae64206a8"),
        "departureAirport": "MUC",
        "arrivalAirport": "SFO",
        "aircraft": "Airbus A380",
        "distance": 12000,
        "intercontinental": true
        "marker": "delete"
    }

    If successful, mongoDB returns:

    { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1}


If your filter value is '{}' , an empty set of braces, that means select all documents. 

    db.flightData.updateMany({}, {$set: {marker: "toDelete"}})

    So, this will select all documents with the '{}' in the filter argument.
    And will set a new prop, {marker: 'toDelete'} for all documents. 


To delete all documents in a collection:

    db.flightData.deleteMany({})

To delete documents that have a certain property:

    db.flightData.deletemany({marker: "toDelete"})

To add multiple documents to a collection:

    You need to have an array data structure with each element in the array, a document.
    Here, we add two documents to our flightData collection.

        [
            {
                "departureAirport": "MUC",
                "arrivalAirport": "SFO",
                "aircraft": "Airbus A380",
                "distance": 12000,
                "intercontinental": true
            },
            {
                "departureAirport": "LHR",
                "arrivalAirport": "TXL",
                "aircraft": "Airbus A320",
                "distance": 950,
                "intercontinental": false
            }
        ]
    
    To insert multiple documents, you pass the array of documents in the insertMany() method:

    db.flightData.insertMany([
            {
                "departureAirport": "MUC",
                "arrivalAirport": "SFO",
                "aircraft": "Airbus A380",
                "distance": 12000,
                "intercontinental": true
            },
            {
                "departureAirport": "LHR",
                "arrivalAirport": "TXL",
                "aircraft": "Airbus A320",
                "distance": 950,
                "intercontinental": false
            }
        ])
    
    If the insertion was successful, mongoDB will add ObjectId's and will return:

    {
        "acknowledged" : true,
        "insertIds" : [
            ObjectId("2934239473927sdjkhfs"),
            ObjectId("sldjf2384202kfsdjlf2")
        ]
    }

    MongoDB inserts the documents the same order as in the array that was passed in. 
*/