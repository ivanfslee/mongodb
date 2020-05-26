/*
One to Many - References

City <-> Citizens
    One city has many citizens
    One citizen belongs to one city

Here, we look at a situation where splitting
    our data into separate documents and collections
    might make sense.

    City A ---- Citizen 1
           ---- Citizen 2
           ---- Citizen 3
    
    City B ---- Citizen 1

    City C ---- Citizen 1
           ---- Citizen 2

The problem we might face:
    It makes sense that we have a one-to-many relationship.
    but we might embed our documents.

    Where City A contains an embedded document of all
        the citizens as well.

    This would require alot of overhead, when we just
        fetch the city data.

    That is, we may not want the Citizen data when 
        we are fetching the city data.

    Also, for one city, with millions of citizens,
        we may hit the 16mb limit of a document size
        if citizens are embedded into a city document.

So in this instance, for technical (16mb limit) and 
    application reasons (we only want city data and not citizen data)
    it may be better to model this databse into separate
    collections.

    We DO NOT include an array of the citizens id
     in the cities collection

     This is NOT what we want:

        db.cities.insertOne({
            name: 'New York City',
            coordinates: {
                lat: 21, 
                lng: 55
            },
            citizens: [
                '234az',
                '235xa',
                '546rc',
                '12gsx'
            ]
        })
    
    This is what we want:
    We just have the metaData of the city in a document.

        db.cities.insertOne({
            name: 'New York City',
            coordinates: {
                lat: 21, 
                lng: 55
            }
        })
  
    So in our database, we have this:
    
        db.cities.findOne()

        {
            "_id" : ObjectId("5ecc408a549c72872a475fcc"),
            "name" : "New York City",
            "coordinates" : {
                    "lat" : 21,
                    "lng" : 55
            }
        }
    
    MongoDB assigns an ObjectId of the city document,
        and we use this ObjectId in the citizens documents
        to mark which city the citizen belongs to.
    
So we store the citizens in a separate collection:

    db.citizens.insertMany([
        {
            name: 'Max Schwarzmueller',
            cityId: ObjectId("5ecc408a549c72872a475fcc") //Can also be 'New York City' - you want something unique here for this value
        }, 
        {
            name: 'Manuel Lorenz',
            cityId: ObjectId("5ecc408a549c72872a475fcc")
        }
    ])

So our citizens database will look like this:

        db.citizens.find().pretty()

        {
            "_id" : ObjectId("5ecc42ec549c72872a475fcd"),
            "name" : "Max Schwarzmueller",
            "cityId" : ObjectId("5ecc408a549c72872a475fcc")
        }
        {
            "_id" : ObjectId("5ecc42ec549c72872a475fce"),
            "name" : "Manuel Lorenz",
            "cityId" : ObjectId("5ecc408a549c72872a475fcc")
        }

Now, if we just want the city, we look at our cities collection.
    and we won't hit our 16mb document size limitation.

    And we don't unnecessarily fetch all the citizens along with 
    the city, if we are only interested in the city metadata.

If we want our citizens, we can look in the citizens collection.
    and we can match the citizens to their respective city.
*/