/*
One to One - Using References

    In the last lecture, we had a one-to-one relationship
        where we want to have an embedded document.

    Most one-to-one relationships, you will probably
        go with the embedded documents.

    But even with a one-to-one relationsjop, 
        you could opt to have multiple collections

Person - Car Scenario

    One person has one car, a car belongs to one person.

    Person owns a car. 

    It is a one-to-one relation because the car cannot
        be owned by a different person.
    
    And although a person can own multiple cars, 
        let's just say each person owns only own one car.

    Overall the situation is a one-to-one relation - 
        one car per person and one person per car.
    
    We have an embedded document.
    So we insert this into our database:

        db.persons.insertOne({
            name: 'Max', 
            car: {
                model: 'BMW', 
                price: 40000
            }
        })


    We access it:
        db.persons.findOne()

        {
            "_id" : ObjectId("5ecaf2ef1b736e70ce743ecc"),
            "name" : "Max",
            "car" : {
                "model" : "BMW",
                "price" : 40000
            }
        }
    
    Maybe we have more of an analytics use case.
        Perhaps we are analyzing person data 
        (e.g. average salary, age)
    
    Basically, we might have an application-driven reason for
        splitting up our data into separate collections.

    Its fine the way we have it now, merging into one collection.

    But our application has no need to fetch all the persons
        just to get their cars.
        If we needed just the car data, we have to go
        through each person and extract the car data from 
        the embedded document. 

        We would have to do alot of transformation work.

    Basically, the decision to merge the car data with the person
        data is based on the application/our use-case.

    Based on our hypothetical use-case, we just want to do
        analytics on the car data.

    We will then have Persons and Cars in separate collections.


    Insert the person:
        db.persons.insertOne({name: 'Max', salary: 3000})

    Insert the Car and put the objectID of the person we just added
        as the owner.

        db.cars.insertOne({
            model: 'BMW',
            price: 40000,
            owner: ObjectId("5ecafafb1b736e70ce743ecd")
        })

    The database now looks like:

        db.persons.findOne()

        {
            "_id" : ObjectId("5ecafafb1b736e70ce743ecd"),
            "name" : "Max",
            "salary" : 3000
        }


        db.cars.findOne()

        {
            "_id" : ObjectId("5ecafb611b736e70ce743ece"),
            "model" : "BMW",
            "price" : 40000,
            "owner" : ObjectId("5ecafafb1b736e70ce743ecd")
        }
    
    The Person and the car they own are in separate collections.

    What we can do is put the ObjectId of the car into the 
        Persons document.
        
        That would depend on if we need to relate the car
        to the owner.
        
        That is, if we need to fetch the person and need to see
        what car they own.
        
        Or, need to see who owns a particular car.

    Summary:
        We can link documents depending on our needs
            and separate into different collections
            or we can merge documents via embedding them.

*/