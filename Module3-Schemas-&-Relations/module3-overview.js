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
*/