/*
Many to Many - Embedded

Customers <-> Products (Orders)

    One customer has many products (from orders).
    One product belongs to many customers.

How can we model this, many-to-many, relationship?

    Typically, we will model this with references


The SQL world approach:
    We add a document for the product
    We add a document for the customer
    We add a document for the order that contains
        the productId and the customerId

    db.products.insertOne({title: 'A Book', price: 12.99})

        {
            "acknowledged" : true,
            "insertedId" : ObjectId("5ecd843db8036d17b3c8f871")
        }

    db.customers.insertOne({name: 'Max', age: 29})

        {
            "acknowledged" : true,
            "insertedId" : ObjectId("5ecd844cb8036d17b3c8f872")
        }

    db.orders.insertOne({
        productId: ObjectId("5ecd843db8036d17b3c8f871"), 
        customerId: ObjectId("5ecd844cb8036d17b3c8f872")
    })

        {
            "acknowledged" : true,
            "insertedId" : ObjectId("5ecd8494b8036d17b3c8f873")
        }

The SQL world approach is where we have 3 tables that
        join tables. 

The orders table would join the products and customers.

A more mongodb approach would use two tables/collections.
    We drop the orders collection.

        db.orders.drop()

Now our collections look like this:
    db.products.find()

        {
            "_id" : ObjectId("5ecd843db8036d17b3c8f871"), 
            "title" : "A Book", 
            "price" : 12.99 
        }

    db.customers.find()

        { 
            "_id" : ObjectId("5ecd844cb8036d17b3c8f872"),
            "name" : "Max",
            "age" : 29 
        }

We add a property to the customer and not the
     product in this case because the customer
     is the active entity.

It is more realistic that you are fetching 
    the orders for a customer rather than 
    to display orders for a given product.

Though, that would be possible too and you
    can use that approach on both tables here.

So we update the customers document:

We add an embedded orders array into the customers document.
    It contains the productId and the quantity

db.customers.updateOne({}, {
    $set: {
        orders: [{
            productId: ObjectId("5ecd843db8036d17b3c8f871"), 
            quantity: 2
        }]
    }
})

So now, our customers document looks like this:

    db.customers.findOne()

        {
            "_id" : ObjectId("5ecd844cb8036d17b3c8f872"),
            "name" : "Max",
            "age" : 29,
            "orders" : [
                {
                    "productId" : ObjectId("5ecd843db8036d17b3c8f871"),
                    "quantity" : 2
                }
            ]
        }

Although it looks like an embedded document, that's because it is.
    But we consider this a reference approach because we
    did not embed the product data. 

    We embedded the reference to the product.

So now we have a many-to-many relationship with references.

You could argue that we don't need to use references here.
We can just put the product whole hog into the orders array in the
    customers document. This would be an embedded approach.

Let's look at the embedded approach.

So we replace the orders array with the actual product title and price.
    We remove the productId

db.customers.updateOne({}, {$set: {
    orders: [
        {
            productId: ObjectId('5ecd843db8036d17b3c8f871'),
            title: 'A Book',
            price: 12.99,
            quantity: 2
        }
    ]
}})

Then the customers document looks like this:

This is no longer a reference driven approach.
    But an embedded approach.

db.customers.findOne()

        {
            "_id" : ObjectId("5ecd844cb8036d17b3c8f872"),
            "name" : "Max",
            "age" : 29,
            "orders" : [
                {
                    "productId": ObjectId("5ecd843db8036d17b3c8f871"),
                    "title" : "A Book",
                    "price" : 12.99,
                    "quantity" : 2
                }
            ]
        }

A disadvantage of this approach is data duplication.
    Recall that our products collection looks like this:

    db.products.findOne()

        {
            "_id" : ObjectId("5ecd843db8036d17b3c8f871"),
            "title" : "A Book",
            "price" : 12.99
        }
The fields of the 'title' and 'price' in the products
    collection matches whats included in the 
    customers collection.

And this same customer may order the same product again
    and other customers may order that product also.

    So the book may end up duplicated in many other documents.

And if you need to change the data of the book product itself,
    you have to change it in all the instances that it shows 
    up in.
    But in this case, we may not care if the book data changes.
    For example, if the price of the book changes, we don't care
    about changing the price of the book in the orders array.

    That is because those orders have already happened.
    Essentially, the orders array contains a snapshot of
    data at a certain point in time in the past.

    So that duplicated data (of the past) doesn't need
    to change in all the places it is at if the original
    data changes.

Though, that all highly depends on your application and needs.
    In this example, it is okay to have the duplicated data, 
    because the data serves as a snapshot for a time in the past.

    For a shop/products/orders, this data duplication may make sense.

    In other use cases, it may not. 

    In other cases, you may need the latest updated data everywhere
    for every instance that duplicated data shows up in.

So basically, even in a many-to-many situation, you will MOST LIKELY
    use a reference based approach to your database.
    But not always. 

    You need to think about how you fetch your data.
    How often you change it.
    And if you change it, do you need to change it everywhere.
    Or can duplicates be fine, even if it changes over time.
*/