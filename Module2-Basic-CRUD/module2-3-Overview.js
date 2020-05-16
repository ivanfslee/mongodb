/*
Understanding find() - The Cursor Object

    When we use find() to show the data in our collection, 
        we don't get back an array with objects.
    
    When using find(), mongo shell will return the first
        20 documents and then stop.
    
    Instead, we get back a 'Cursor Object'.

    This is because, if our collection has millions of documents,
        when we find(), it would be an expensive operation.
    

The Cursor Object

    Allows us to cycle through the results.

    When querying the database using find(), you will
    get the first batch of data. 

    To get the next batch of documents, mongodb will 
    prompt you with:

        "Type 'it' for more"
    
    'it' command basically used that cursor to fetch the next 
        batch of data. 

    So find() really just gives us back that cursor.


Exhausting the cursor with toArray()

        db.passengers.find().toArray()

    This command will return all documents in a collection
        in an array.

    toArray() will go and exhaust the cursor, that is, 
        go through the entire list and fetch ALL the documents.
        It will not stop after the first 20. 

    When using find(), mongo shell will return the first
        20 documents and then stop.
    

The forEach() Method

        db.passengers.find().forEach()

    forEach() allows you to write some code to do something
        on every document in your collection.
    
    Each driver will have a specific syntax to do this.
        e.g. PHP driver, JavaScript driver, etc.
    

The forEach() Method in JavaScript

    db.passengers.find().forEach((passenger) => {
        printjson(passenger)
    })

    The cursor will execute our passed in function on each document
        one at a time.
    
    forEach() doesn't load the entire collection into memory.
        It will go through the collection one document at a time.

find() gives you a cursor at not the document itself. 

findOne() gives us the document itself and not the cursor
    and pretty() only works on cursor,
    so that's why pretty() doesn't work on findOne().
    pretty() only works on find() because find() returns
    a cursor.

    The shell takes the cursor and returns the first 
    20 documents by default.

For the other methods insert/update/delete, cursors do not exist
    because those methods don't fetch data.
    They manipulate the data instead.

    
*/