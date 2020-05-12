//Inside this module:
    //Basics about Collections and Documents

    //Basic Data Types in MongoDB

    //Perform CRUD Operations

//Start up mongodb server
    // mongod --dbpath "C:\data\db"
    // If you want to use a different port (the default is 27017)
        //type 'mongod --dbpath "C:\data\db" --port <some other port number>'

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