//Mongo DB

    //Database -> Multiple Collections in Database-> Multiple Documents in each Collection

    //Database - 'Shop'
        //Collections - 'Users' , 'Orders'
            //Documents
    
    //Non-relational database which leads to flexibility
        //Schemaless

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