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


//Download binary/msi installer from mongodb website
    //Install using custom settings
    //Do not install mongodb compass because it will hang on install
    //Choose where to install your mongodb
    //Create a folder called 'data' and inside that create a folder called 'db'
    //For windows, type 'environment' in your search
    //Open up 'Edit Environment Variables"
    //Select 'path' in the user variables
    //Add the file path to your bin directory in your mongodb installation
        //Should be something like: C:\Program Files\MongoDB\Server\4.2\bin
    //In your terminal, type 'mongodb'
    //If stuff happens, you should successfully install your mongodb
    //Ctrl + C to exit your mongodb
    //Then type 'mongod' to restart your mongodb
    //If it doesn't work type: mongod --dbpath "C:\data\db"
        //Or whatever your path to the 'db' folder you set up is
    //When you startup your database, you have to run that command:
        //mongod --dbpath "C:\data\db"
    //Then open another terminal window and type 'mongo' to connect to your database
    //You are now in the mongo shell which is the environment where you can run commands
        //against your database
        //Here in the shell, you can create new databases, new collection, new documents

//Mongodb commands:
    //'cls' - clears screen
    //'show dbs' - show existing databases
        //You start off with 3 default dbs - admin/config/local
        //that store some metadata
    //'use <db name>' - connect to db , 'db name'
        //if it doesn't exist, it will be created
    //'db.<name of collection>.insertOne({<json data here>})' - create collection and document
        //If collection doesn't exist, it will be created
        //'db' refers to the database you are currently in

        //e.g. Here, we insert a document into the 'products' collection in 'shop' database
            //db.products.insertOne({name: "A Book", price: 12.99})
        
        //The keys like, 'name' and 'price' don't have to be surrounded by 
            //quotation marks.
            // Though behind the scenes, when it is stored in the database, 
            //there will be double quotes.
            //The value, like 'A Book' must be surrounded by double quotes
                //because it is a string
        
        //If your document is successfully added, you will get an 'acknowledged':true and 'insertedId'
            //This confirms that the data was inserted into the db
            //and mongodb automatically generated a unique ID for the insertion
    //'db.<name of collection>.find()'
        //This will give you all data in the collecion
    //'db.<name of collection>.find().pretty()'
        //Outputs all the data in the collection in an easier to read way
    
//Full List of mongoDB shell commands here:
    //https://docs.mongodb.com/manual/reference/mongo-shell/

    //'show collections' - print list of collections for current database

//MongoDB Drivers
    //Working in the shell is programming language agnostic, so we work in the shell for most of the course
    //Near the end of course, we will build a small node.js application to demonstrate how we move from shell to driver

    //Drivers are bridges between your programming language and the mongoDB server
    //Full list of programming languages and their respective drivers here:
        //https://docs.mongodb.com/drivers/


//Application Layer (e.g. Node Application)
    //1. Frontend (UI)
        //Mobile App/single page app/views(ejs)/ etc
    //2. Backend (Server)
        //Express,

        //Drivers (for Node.js/Python/Java etc)
            //Drivers communicate/interface with the MongoDB Server
        
        //MongoDB Shell
            //MongoDB Shell also communicates with MongoDB server
                //and does the same things as the Mongodb drivers
            //MongoDB Shell is also for playground and administration of
                //the MongDB server

//Data Layer (your database/data storage/ files on a file system)
    //1. MongoDB Server
        //MongoDB Server does not directly write data into files
            //but will talk to a storage engine
            //The default storage engine for Mongodb is 'Wired Tiger'

            //So your mongodb server gets the query from your mongodb driver
                //or your mongodb shell
                //and then forwards that query to the storage engine
                //Storage engine then stores the files

    //2. Storage Engine ('Wired Tiger')
        //Storage engine manages your data and stores it in files


    //3. File System - Storage engine interacts with the file system
        //File system may store stuff in memory first beacuse it is faster
            //before moving it into files

        //Read + Write Data to Files (slow)

        //Read + Write Data in Memory (fast)
