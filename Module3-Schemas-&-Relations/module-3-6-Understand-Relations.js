/*
Relations: 
    Recall:

    MongoDB stores documents in BSON, which is 
    the binary encoded format of JSON. 
    
    Basically, the name BSON itself comes
     from Binary encoded JSON. 
     
    The BSON data format provides various types,
    used when we store the JavaScript objects in the binary form.


Typically, you will have multiple collections in a database
    And these collections will be related.

    How do you store related data?
        Through Nested/Embedded Documents?
        Through References?


Nested/Embedded document with nested address


    'Customer' Collection has this document 
        for a customer:

    {
        'userName': 'Max',
        'age': 29,
        'address': {
            'street': 'Second Street',
            'city': 'New York'
        }
    }

    Notice that the Customer has an 'address'
        that could be stored in a new collection.
        But it is embedded.

A different structure using 'References'

    Let's say you have a collection with users 
        and their favorite books.

    The books are arranged in an array of 
        embedded documents.
        Each document in the array is a book.

        Customers Collection:
            { 
                userName: 'Max',
                favBooks: [{...}, {...}]
            }
    
    The problem with this approach is that 
        different users may have similar books
        in their 'favBooks' arrays.

    The result is alot of duplicate data, 
        which is not what we want.

    The downside to this is, if you need to
        change a book in an array, 
        you may have to change that book 
        in many different users documents.

    The solution to this is using 'references'.
        
        We have two collections. 
        
        One collection will have the customers
            and an array of their favorite books.
            But array will have the id of the book.

        Each id refers to a document id in the 
            books collection.

        Customers Collection:

            {
                userName: 'Max',
                favBooks: ['id1', 'id2']
            }
    
        Books Collection:

            {
                _id: 'id1',
                title: 'Lord of the Rings'
            }
        
        This way, if a book changes, we can just 
        change the book in the book collection
        and we won't have to change any of
        user documents in the customers collection.
*/