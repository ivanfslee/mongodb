/*
Example Project: A Blog


    Think about how you would structure the data.

User - in our application (server side rendered website/ single page app / mobile app/ etc)

    Application -> User -> App Server -> MongoDB Server & Database

To the app server, we send a couple different requests

    create posts
    edit posts
    delete posts
    fetch all posts 
    fetch single post
    comment 

App Server
    PHP
    .NET
    Node.js

    PHP/.NET/Node.js will use MongoDB Driver
        to make requests to the MongoDB Server and Database

Identify a schema 
Identify the entities we have and how the 
    schemas for these entities could look like
    how they are related and how we would 
    model these relations.

Layout the core data entities you have and how they 
    might look like in your application and how they
    could be related.



My Data Schema for a Blog

    You essentially have a one-to-many relationship.

    One user will have many posts.
    One post belongs to one user.

    The question is, do I make it an 
        embedded document or use references?

        An embedded document would look like this:

        We would only have one collection - 'Users'
            that would contain an array of documents
            where each document is a blog post


        Embedded Blog Schema
        
            Users Collection

                {
                    userId: '23l4j23l423j',
                    name: 'John Doe',
                    posts: [
                        {
                            postId: 'post1',
                            title: 'hello world',
                            body: 'aloha world',
                            comments: []
                        },
                        {
                            postId: 'post2',
                            title: 'vaccay',
                            body: 'going on vacation',
                            comments: []
                        }
                    ]
                }


        The alternative is to have separate 'Users' and 'Posts' collections.
            The 'Users' collection documents would have an array of 'postId's
            that reference a post document in the 'Posts' collection.

        References Blog Schema

            Users Collection 

                {
                    userId: '23423l4j23kl4j23',
                    name: 'John Doe',
                    posts: ['post1', 'post2']
                }

            Posts Collection

                {
                    postId: 'post1',
                    title: 'hello world',
                    body: 'aloha world',
                    comments: []
                },
                {
                    postId: 'post2',
                    title: 'vaccay',
                    body: 'going on vacation',
                    comments: []
                }
*/