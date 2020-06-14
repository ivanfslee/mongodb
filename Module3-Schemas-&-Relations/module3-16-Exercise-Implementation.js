/*
We add two users to our 'users' collection in our blog database

    use blog

    db.users.insertMany([
        {
            name: 'Max Schwarzmuller',
            age: 29,
            email: 'max@test.com'
        },
        {
            name: 'Manuel Lorenz',
            age: 30,
            email: 'manu@test.com'
        }
    ])

    Our users database now looks like this: 

        db.users.find().pretty()

        {
            "_id" : ObjectId("5ee5731d239f99fa236beb74"),
            "name" : "Max Schwarzmuller",
            "age" : 29,
            "email" : "max@test.com"
        },
        {
            "_id" : ObjectId("5ee5731d239f99fa236beb75"),
            "name" : "Manuel Lorenz",
            "age" : 30,
            "email" : "manu@test.com"
        }

    We move on to our 'posts' collection:

    Notice, we use references to the creator and commenter using references.
        By putting in the ObjectId's.
    
    The entire comment itself though, is an embedded document.
        The commenter inside the comment document is using a reference.

    db.posts.insertOne(
        {
            title: 'My first post!',
            text: 'This be my first post. Aloha everyone.',
            tags: ['new', 'tech'],
            creator: ObjectId("5ee5731d239f99fa236beb75"),
            comments: [
                {
                    text: 'Dope post, yo',
                    commenter: ObjectId("5ee5731d239f99fa236beb74")
                }
            ]
        }
    )

    Our posts collection now looks like this:

    db.posts.findOne()
    {
        "_id" : ObjectId("5ee575f3239f99fa236beb76"),
        "title" : "My first post!",
        "text" : "This be my first post. Aloha everyone.",
        "tags" : [
                "new",
                "tech"
        ],
        "creator" : ObjectId("5ee5731d239f99fa236beb75"),
        "comments" : [
                {
                        "text" : "Dope post, yo",
                        "commenter" : ObjectId("5ee5731d239f99fa236beb74")
                }
        ]
    }

    Most importantly we have a reference relation to the person who
        created the post.

    We also have an embedded document for each comment that was made.
        Inside the comment document is a reference relation to the commenter.

*/

