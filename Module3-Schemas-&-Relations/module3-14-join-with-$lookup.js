/*
Merging related documents that you split
    up using the reference approach

Example:

Customers collection has this document:

    {
        userName: 'max',
        favBooks: ['id1', 'id2']
    }

Books collection has this document:

    {
        _id: 'id1',
        name: 'Lord of the Rings 1'
    }

We perform an 'aggregate' method and use the $lookup operator

    customers.aggregate([
        { $lookup: 
            {
                from: 'books',
                localField: 'favBooks',
                foreignField: '_id',
                as: 'favBookData'
            }
        }
    ])

This will merge two documents together.


///////////////////////////////////

The $lookup operator
    $lookup is essentially a helpful tool that allows
    you to fetch two related documents 
    and MERGE THEM TOGETHER into one document
    in one step, instead of having to do two steps.

This mitigates some of the disadvantages of splitting
    your documents across collections, because now
    you can merge them in one operation.


The 'aggregate' method

    We use our books collection which currently looks like this:

    db.books.find().pretty()

    {
        "_id" : ObjectId("5ed356178e787fa01b4f8642"),
        "name" : "My favorite book",
        "authors" : [
                ObjectId("5ed3585f8e787fa01b4f8643"),
                ObjectId("5ed3585f8e787fa01b4f8644")
        ]
    }

    Our author collection looks like this:

    db.authors.find().pretty()                                 

    {                                                         
        "_id" : ObjectId("5ed3585f8e787fa01b4f8643"),        
        "name" : "Max Schwarz",                              
        "age" : 29,                                          
        "address" : {                                        
                "street" : "Main"                            
        }                                                    
    }    

    {                                                         
        "_id" : ObjectId("5ed3585f8e787fa01b4f8644"),        
        "name" : "Manuel Lor",                               
        "age" : 30,                                          
        "address" : {                                        
                "street" : "Tree"                            
        }                                                    
    }    
    
    
We use 'aggregate' method on the books collection like so:

    We pass in an array because with 'aggregate', you can define
        multiple steps on how to aggregate your data.
    
    We pass in a document into the array with the $lookup operator
        with another document with 4 things defined:
            1. from: 'authors' (from what collection do you want to relate to)
            2. localField: 'authors' (in the 'from' field  'authors' collectionwhere can the references to the other collection be found in)
            3. foreignField: '_id'(which field are you relating to in your target collection)
            4. as:
    
    db.books.aggregate([
        {
            $lookup: 
                {
                    from: 'authors',   //We want to pull from the 'authors' collection
                    localField: 'authors',  //We are looking in the 'authors' collection documents, 'authors' field
                    foreignField: '_id',   //We want to relate to our 'books' collection's '_id' field
                    as: 'creators'   //we make up a name we want this new field to be stored
                }
        }
    ])


If you have to use references, then this $lookup step in the aggregate framework
    can help you get the data you need.

The above aggregate method returns the following:

db.books.aggregate([{$lookup: {from: 'authors', localField: 'authors', foreignField: '_id', as: 'creators'}}]).pretty()

    {
        "_id" : ObjectId("5ed356178e787fa01b4f8642"),
        "name" : "My favorite book",
        "authors" : [
                ObjectId("5ed3585f8e787fa01b4f8643"),
                ObjectId("5ed3585f8e787fa01b4f8644")
        ],
        "creators" : [
                {
                        "_id" : ObjectId("5ed3585f8e787fa01b4f8643"),
                        "name" : "Max Schwarz",
                        "age" : 29,
                        "address" : {
                                "street" : "Main"
                        }
                },
                {
                        "_id" : ObjectId("5ed3585f8e787fa01b4f8644"),
                        "name" : "Manuel Lor",
                        "age" : 30,
                        "address" : {
                                "street" : "Tree"
                        }
                }
        ]
    }
*/