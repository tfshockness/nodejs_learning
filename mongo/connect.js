const MongoClient = require('mongodb').MongoClient;

//Takes 2 arguments
//1- URL where the db lives
//2- callback function that fires after connect to the db. fail or success
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err)
    {
        throw new Error('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');

    db.close();
});