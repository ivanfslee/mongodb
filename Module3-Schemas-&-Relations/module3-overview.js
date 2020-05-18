/*
Data Schemas & Data Modelling


    To delete an entire database:
        1. Load up the database you want to delete

            use <database name>

        2. Then use the 'dropDatabase()' method

            db.dropDatabase()
    
    To delete just a collection in a database:
        We use the 'drop()' method

        db.<collection name>.drop()

    To delete all documents in a collection:

        db.<collection name>.deleteMany({})

In this module we will go over the following:

    Decide how we model our data
    How we store our data
    Our relations in our data

    1. Understanding Document Schemas & Data Types (text, numbers, dates)

    2. Modelling Relations (b/w our data and documents)

    3. Schema Validation (validate whether data coming in is what you want)

Why do we use Schemas?

    Recall:
        MongoDB enforces no schemas. Documents don't have to use 
            the same schema inside of one collection.
        That is, in one collection, you can have a bunch of 
            different schemas.

    Despite mongo not ENFORCING a particular schema, in reality,
        you will have some kind of schema.
    It is in your interest to have things somewhat organized 
        and consistent across your data.

Structuring Documents

    No Schema ------------------------------------- SQL 

    Imagine a continuum - one extreme is no schema at all
        The other extreme is that all documents have the same schema.
    
    In the middle is, generally, documents have the same schema
        but some documents have extra information and extra
        properties that other documents don't have.
    
    Typically, you will err on the side of the middle or towards
        the right side of the continuum. 
    
    In the SQL world, if you don't have data for a certain property
        you will have a null value.
    In the middle, you will simply not have that property at all.

    In the SQL approach, you may use it if you like the clarity and
        consistency of the same fields in each document.
    
    There is no convention here. Use whichever approach you prefer.
    
Data Type

    'double' number type is a number with decimals - e.g. 12.99
    'integer' number type is a number without decimals - e.g. 12

    'null' data type - value you can assign to indicate there is 
        no value but there is a field there.
*/