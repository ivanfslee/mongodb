/*
Data Type

    'double' number type is a number with decimals - e.g. 12.99
    'integer' number type is a number without decimals - e.g. 12

    'null' data type - value you can assign to indicate there is 
        no value but there is a field there.
    
The types of data we can save in our fields, in our documents:

    1. Text - e.g. "Max"
        Surrounded by double or single quotes.
        The only limitation is 16mb size of 
            the entire document
    
    2. Boolean - e.g. true
        Can be true or false
    
    3. Numbers
        There are a few different types available

            1. integers - int32 - e.g. 55
                int32 integers - integers that are 32 bits long
                If you try to store integers larger than 32 bits
                    that will overflow the range.
            2. integers - int64 - e.g. 10000000000
                64 bit integers
            3. NumberDecimal - e.g. 12.99
                Note: The default in the mongodb shell is
                    based on JavaScript, so it stores a 
                    floating point value in the shell.
                But in mongoDB, you can store 'NumberDecimal'

                Which is a high precision floating point values

                Normal floating point values, called 'doubles'
                    are rounded so they are not super precise
                    after their decimal place.
                    For most applications, 'doubles' will suffice.
            
                If doing very precise calculations, a special
                    tyoe of data, that offers high decimal
                    place precision where you have
                    34 decimal places.
            
    4. ObjectId - 
        Special object generated by MongoDB to give you
            a unique ID which is not just a unique 
            random string, but also a string 
            that contains a temporal component.

            If you create 2 documents, one after another,
            you are guaranteed to have the right order
            due to the ID. Because the older element
            will have an ID that comes prior to the other
            one. 

            So there is a sorting built into the ObjectId
            that encodes a timestamp.
    
    5. ISOData - e.g. ISODate("2018-09-08")
            Special ISO date type. You can construct the
            date and save that your database.
    
    6. Timestamp - e.g. Timestamp(11325132)
        Mostly used internally. You can create it
        automatically, mostly you let mongoDB create it 
        for you. And that is guaranteed to be unique.

        If you create two documents at the same time,
            those two docs will not have the same
            time stamp.

    7. Embedded Documents - e.g. {"o": {...}}
        You can store documents within documents.
            Those docs can hold any fields with any
            values we mentioned above.
    
    8. Arrays - e.g. { b: [...] }
        Arrays are lists of values. Any of the above
            values can be stored in the array.
            Including arrays in an array, objects in 
            an array, etc. 
*/