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
        e.g. db.flightData.insertOne({deoartureAirport: "TXL", arrivalsAirport: "LHRU", "_id": "txl-lhr-1" })

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

The following operations are all directly executed on a collection:

    Create Operations
        insertOne(data, options)
        
        insertMany(data, options)

    Read Operations
        find(filter, options)
        
        Note: filter allows you to narrow down the data set

        findOne(filter, options)

        find - finds all matching documents
        findONe - finds the first matching document

    Update Operations
        updateOne(filter, data, options)

        updateMany(filter, data, options)

        replaceOne(filter, data, options)

    Delete Operations
        deleteOne(filter, options)

        deleteMany(filter, options)
*/