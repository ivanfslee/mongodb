/*
One to Many - Embedded

    One to Many relations

    We are looking at the Q & A Section of Udemy

    1 question can have multiple answers to it.

    Each question thread has a couple of answers.
        One question thread has many answers.
        One answer belongs to one question thread.

    How would you model this in MongoDB?

        We insert a document into the 'questionThreads' collection.
        The answers property has an array with the answer id's.

            db.questionThreads.insertOne({
                creator: 'Max',
                question: "How does that all work?",
                answers: ['q1a1', 'q1a2']
            })


            db.questionThreads.findOne()

            Returns:

                {
                    "_id" : ObjectId("5ecb47d2cfd1ddc447e5de02"),
                    "creator" : "Max",
                    "question" : "How does that all work?",
                    "answers" : [
                        "q1a1",
                        "q1a2"
                    ]
                }
        
        Then we insert some answers.
            Each document in the 'answers' collection is an answer to one question.

            //Note: insertMany needs to accept an array '[]' of objects

            db.answers.insertMany([
                {_id: 'q1a1', text: 'It works like that.'}, 
                {_id: 'q1a2', text: 'Thanks!'}
            ])

        We also could have created the 'answers' documents first.
            Take the ObjectID's of the answers and then create the 
            question document and put the ObjectID's of the answers into it.

Here, embedding the answers might be the better solution.

        The answers property are no longer an array of strings but
            an array of documents, with the full answer in them, and not just
            a reference to the answer.


        So we use embedded documents and place the answers directly into 
            the questionThreads collection.

                db.questionThreads.insertOne({
                    creator: 'Max',
                    question: 'How does that work?',
                    answers: [
                        {text: 'Like that.'}, 
                        {text: 'Thanks!'}
                    ]
                })


            db.questionThreads.findOne()
            Returns a list of embedded documents:

                {
                    "_id" : ObjectId("5ecb4b90cfd1ddc447e5de03"),
                    "creator" : "Max",
                    "question" : "How does that work?",
                    "answers" : [
                        {"text" : "Like that."},
                        {"text" : "Thanks!"}                                
                    ]
                }

        Often you need to fetch the questions along with the answers.

        So it makes sense to model the data like this and keep
            the answers and questions together.
            We also, don't have thousands of 
            answers to a question typically.
            So we don't have the danger of reaching
            the 16mb limit of a document size.
*/