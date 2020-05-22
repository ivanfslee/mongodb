/*
Data Schemas & Data Modelling

    Guidelines and tips on how you should structure your data

        Relations come after this

    Which Data does my App need or generate?
        User Information, Product Information, Orders,...

            Defines the Fields you'll need (and how they relate)

    Where do I need my Data?
        Welcome Page, Products List Page, Orders Page and what
        kind of data do i need on these pages?

        The idea with MongoDB is that you store your data 
        in the format you need in your application.

        If necessary, you can even split up your data into multiple
        collections.

            Thus, this defines your required collections + field groupings.
            For example, you have a product collection for the products page.
            It defines which fields you have in the documents of a collection
            and how you might group these fields together (i.e. how you might 
            relate these fields)

    Which kind of Data or Information do I want to display?
        Welcome Page: Products Names; Products Page: ...

            Thus, this defines which queries you'll need.
            For example , do I display one product or many products.
            If one product, I would use the findOne() query.
            If multiple products, I would use the find() query.

    How often do I fetch my data?
        Planning your data structure based on the way you will retrieve your data.
        So you don't have to do complex joins, so that you can retrieve your data
        in the format or almost in the format that yo need in your application.

        For every page reload? every second? not that often?

            This helps defines whether you should optimize for easy fetching.
            Because maybe you are fetching alot, but you are not writing data much.

    How often do I write or change my data?
        Orders => Often
        Product Data => Rarely

        For example, you may have order data that changes often, but your
        product data rarely changes.

        You want to make sure that your orders are not unnecessarily duplicated
        across collections but that you have one collection with your orders where you
        can write new orders to.

        Product data might be distributed across different collections because you 
        don't change it that often.

            Defines whether you should optimize for easy writing
*/