const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'user'
const client = new MongoClient(url);


async function dbConnect(){
    console.log("Connected Successfully !!")
    let result = await client.connect();
    let db= result.db(databaseName);
    
    let user_feedback =  db.collection('feedbacks');
    let user_response1 = await user_feedback.find({}).toArray();
    console.log("Feedback List");
    console.log(user_response1)   
    
    return db.collection('feedbacks')

}


module.exports = dbConnect;