/*
Hard Limits in MongoDB

    A single document in a collection must be <= 16mb.

    A single document can have up to 100 levels of embedded documents.

        More info and detail in the docs:
            https://docs.mongodb.com/manual/reference/limits/

        Data Types in MongoDB:
            https://docs.mongodb.com/manual/reference/bson-types/
    
    Numbers

        Data Type Limits

            Normal Integers (int32) can hold max value of +-2,147,483,647
            Long Integers (int64) can hold max value of +-9,223,372,036,854,775,807
            Text can be as long as you want, just less than 16mb in size

        Normal double vs int32 vs int64 vs Number Decimal

            insertOne({a: 1}) - will insert a 'normal double' into the database
                The shell is based on JavaScript.
                JavaScript only knows float/double values and doesn't differ
                    between integers and floats.
            
            insertOne({a: NumberInt(55)}) - will insert a int32 value into db

            insertOne({a: NumberLong(55654654654)}) - will insert an int64 value into db

            NumberDecimal() creates a high-precision double value
                This can be helpful for cases where you need many exact decimal places
                    e.g. NumberDecimal("12.99")
        
        These number types are specific for the mongo shell only.
            Please look at your specific driver docs.
        
        E.g. Node Js allows you build a NumberLong
            http://mongodb.github.io/node-mongodb-native/3.1/api/Long.html
        
            const Long = require('mongodb').Long;

            db.collection('<collection name>').insert( {
                value: Long.fromString("2342352523523")
            });

        In Node JS, there are various ways to add a Long.
        The above example uses a string to add a Long.
*/