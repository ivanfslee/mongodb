/*
Deeper Dive into Finding Data

    db.flightData.find({})

    If you pass a document into the find method, it will act like a filter

        db.flightData.find({intercontinental: true})

    This will find all documents that have property 'intercontinental'
        and have a value of 'true'

        
    You can find all flights with a distance greater than 10000 km.

        db.flightData.find({distance: {$gt: 10000}})

    We add the following object into the find() method

        {distance: {$gt: 10000}}

    $gt is mongo syntax for 'greater than'
    $lt is mongo syntax for 'less than'


    Looking for first matching element with findOne()

        db.flightData.findOne({distance: {$gt: 900}})

    Note: pretty() method is not supported by findOne()
    Because only one document is returned, it will be returned
    in a pretty format by mongoDB
        
*/