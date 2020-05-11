//Mongo DB

    //Database -> Multiple Collections in Database-> Multiple Documents in each Collection

    //Database - 'Shop'
        //Collections - 'Users' , 'Orders'
            //Documents
    
    //Non-relational database (schemaless) which leads to flexibility

// Documents have a JSON (BSON) Data Format
    // {
    //     "name": "Max",
    //     "age": 29,
    //     "address":
    //         {
    //             "city": "Munich"
    //         },
    //     "hobbies": [
    //         { "name": "Cooking"},
    //         { "name": "Sports"}
    //     ]
    // }

// Documents
    //Composed of Key/Value pairs
        //with key and values in double quotation marks
        //Numbers don't need to be in double quotes
        //Can support nested data structures
    
    //Nested data structures allow you to create complex relations
        //between data and store them in the same document
    
    //To achieve the same thing in SQL database, you need to
        //query separate tables 

//Behind the scenes on the server, 
    //mongodb converts your json data to a binary version of it
    //which makes it store and query more efficiently

//The main takeaway for mongodb is its flexibility
    //and its optimization for usability
    //You can query data in the format you need,
    //rather than running complex restructurings on the server.

//MongoDV is a NoSQL solution
    //Which differs from that of SQL based

    //Instead of normalizing data - that is, storing data distributed
        //across multiple tables, where every table
        //has a clear schema and then using lots of relations,
    
    //MongoDB goes for storing data together in a document
        //and it doesn't force a schema on you
    
    //Documents in a collection in MongoDB can have different structures
        //Caveat: This can lead to messy data
        //Upside: This gives you a lot of flexibility
    
    //You work with No/Fewer Relations
        //Since data is stored together, when your application
        //is fetching data, it doesn't have to reach out to 
        //collection 'A', merge it with collection 'B', merge with others
    
    //Instead, MongoDB can go to collection 'A', 
        //then MongoDB has a very efficient querying mechanism
        //and goes through the collection 'A' quickly to look for 
        //a specific document
        //Most of the time, MongoDB doesn't have to do alot of merging
    
    //No schema, non-relational data leads to MongoDB's speed, performance, and flexibility

//MongoDB ecosystem
    //MongoDB Database

    //Tools to manage the database

    //Atlas (Cloud) -

    //Mobile

    //Compass - GUI to manage database

    //BI Connectors

    //MongoDB Charts

    //Stitch - Serverless backend solution
        //Offers more than just data storage
        //Serverless Query API
        //Serverless functions - allow you to execute code in the cloud on demand
    
    //In this course, we will use the MongoDB locally and in the cloud