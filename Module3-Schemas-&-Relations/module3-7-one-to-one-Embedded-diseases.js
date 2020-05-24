/*
One to One Relations - Embedded


Database for Hospital

    Every patient has one disease summary.
    That disease summary belongs to that patient only.
    One summary per patient.
    
    This is a 'one-to-one' relation because the
    summary of patient A can never belong to patient B.

    How can we model this?

    Example:

        db.patients.insertOne({
            name: 'Max',
            age: 29,
            diseaseSummary: 'summary-max-1'
        })
    
    We use a reference ID approach- 'summary-max-1' will 
        be the ID of another document.
    
    
    Here we create another collection - 'diseaseSummaries'
        and submit our own id that is the same id
        we put into the patients document.

        db.diseaseSummaries.insertOne({
            _id: 'summary-max-1',
            diseases: ['cold','broken leg']
        })

    We could've also made the disease summary document first
        and let mongo generate the id.
        Then we create the patient and put the disease summary
        id into the patient document.

    Let's say that we have a request where we need that
        patient and also the disease history/summary.

    We get an incoming request, which is submitted
        to the mongodb driver, translated to a 'find' request

    We run some kind of query to find the patient that 
        matches the incoming request - for a patient
        named 'Max'.

    We store the patient's disease summary id into a variable

            db.patients.findOne().diseaseSummary
        
        This returns 'summary-max-1'

        So we store 'summary-max-1' into a variable - 'dsid'

            var dsid = db.patients.findOne().diseaseSummary

    Then we can use that variable - 'dsid' to find the
        document in the 'diseaseSummaries' collection

        db.diseaseSummaries.findOne({_id: dsid})

    That would return:

        { 
            "_id" : "summary-max-1",
            "diseases" : [ "cold", "broken leg" ]
        }

    The splitting of diseaseSummaries from the patients
        seems to be a bit unnecessary here.
    
    The better approach where, we have a strong one-to-one
        relation would be to use embedded documents. 

    So we run this command and just have the diseaseSummary
        as an embedded document in the patients document.

        db.patients.insertOne({
            name: 'Max',
            age: 29,
            diseaseSummary: {
                diseases: ['cold', 'broken leg']
            }
        })

    Then we query for the patient:

        db.patients.findOne()

    That returns:

        {
            "_id" : ObjectId("5ecae11c1b736e70ce743ecb"),
            "name" : "Max",
            "age" : 29,
            "diseaseSummary" : {
                "diseases" : [
                    "cold",
                    "broken leg"
                ]
            }
        }
    
    This is an example when you would use an embedded document,
        is when you have a strong one-to-one relationship.
*/