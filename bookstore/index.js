const express = require('express');
const mongodb= require('mongodb');
const cors =require('cors');

const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/feedback',async(req,resp)=>{

    
    console.log(req.body)
    let data = await dbConnect();
    let result =await data.insertOne(req.body)
    resp.send(result)


})



app.listen(5000)