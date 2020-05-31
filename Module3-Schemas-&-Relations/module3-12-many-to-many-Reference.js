/*
Many-to-many Reference

One book has many authors.
An author belongs to many books.

Last time, we looked at a many-to-many relationship and using
    embedded documents.

    The risk of that is if the embedded document changes.

    If it does change and all instances of the embedded document
        needs to be changed, then embedded would not be a good solution.

    Because there would be alot of data duplication and you need to
        change all instances of it.

    If the embedded document changes, but the changes don't 
        need to be reflected in previous instances of it.
        Then, embedded docs could be okay as a use case.

Here, we will look at a many-to-many relationship
    where using references may be better.


One book has many authors.
An author belongs to many books.

We will have two collections:
    1. books
    2. authors

We insert a book document into book collection:

    db.books.insertOne({
        name: 'My favorite book', 
        authors: [
            {
                name: 'Max Schwarz',
                age: 29
            },
            {
                name: 'Manuel Lor',
                age: 30
            }
        ]
    })

We insert two authors into author collection:

    db.authors.insertMany(
        [
            {
                name: 'Max Schwarz',
                age: 29,
                address: {
                    street: 'Main'
                }
            },
            {
                name: 'Manuel Lor',
                age: 30,
                address: {
                    street: 'Tree'
                }
            }
        ]
    )

So, what we have are books with the authors 
    and some of their associated information.

And then we have separate collection for just the authors.

The problem is what happens if the author's information changes.

    e.g. They get older, so their age changes
    e.g. They change addresses
    e.g. They change their name due to marriage

Then we need to update everywhere the author shows up
    in the books collection and once in the authors collection.

It is no longer a snapshot in time like with the orders example
    in the many-to-many Embedded example.

The data associated with the author needs to be the same
    for all instances of whereever the authors data
    shows up.

So the better approach is to use the references of our authors
    and add them to the books collection.

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

We add the authors ObjectID to the book we have in the 
    books collection:

    db.books.updateOne({}, {
        $set: {
            authors: [
                ObjectId("5ed3585f8e787fa01b4f8643"),
                ObjectId("5ed3585f8e787fa01b4f8644")
            ]
        }
    })

Then the book looks like so, with references to the authors:

    db.books.findOne()
    
        {
            "_id" : ObjectId("5ed356178e787fa01b4f8642"),
            "name" : "My favorite book",
            "authors" : [
                    ObjectId("5ed3585f8e787fa01b4f8643"),
                    ObjectId("5ed3585f8e787fa01b4f8644")
            ]
        }
*/