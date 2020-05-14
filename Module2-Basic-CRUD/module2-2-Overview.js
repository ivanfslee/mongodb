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
    
Update a flight
    We need to select a flight. We will select via ObjectId

    Then we use '$set' to change the document. 
        We will add a property to the document.

        db.flightData.updateOne(
            {_id: ObjectId("sldjfsdlfj")}, 
            {$set: {delayed: true}}
        )
        
    This results in:

        {   
            "_id": ObjectId("12134j2h3k4j2h4k3"),
            "departureAirport": "MUC",
            "arrivalAirport": "SFO",
            "aircraft": "Airbus A380",
            "distance": 12000,
            "intercontinental": true
            "delayed": true
        }


update vs updateMany vs updateOne vs replaceOne?

    'update' method accepts arguments without 'atomic operators' 
        like $set
    
        So, if you did this:

            db.flightData.update(
               {_id: ObjectId("sldjfsdlfj")}, 
                {delayed: true}
        )

        Notice, we don't include a  '{$set: {delayed: true}}',
        
        The result of this is that the document will be just {delayed: true}

            {
                "_id": ObjectId("2304u29342jk34h234"),
                "delayed": true
            }
  
    updateOne and updateMany REQUIRE you use '$set'.
    Without '$set', it will return an error.
    When '$set' is included, it will append the property to the rest of the document.


    Summary:

    'update' without '$set' will replace the entire document with object you pass in
    'replaceOne' will replace the entire document with the object passed in. replaceOne doesn't require a '$set' since it it replacing the entire document.
    
    'update' with '$set' appends the existing document with the object passed in.
        So this will act like updateOne() and updateMany(), which require a '$set'        

    If you want to replace the entire document, you should use 'replaceOne()'
    If you want to partially change a document, use 'updateOne()' or 'updateMany()' (these will require you use $set)
    
*/