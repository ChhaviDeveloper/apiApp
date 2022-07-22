let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 9870;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoURL = process.env.MongoLiveURL;
let db;

app.get('/',(req,res)=>{
    res.send('Hii from Express')
})

app.get('/category',(req,res)=>{
    db.collection('category').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})

app.get('/products',(req,res)=>{
    db.collection('products').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})

MongoClient.connect( mongoURL ,(err,client)=>{
    if(err) console.log("Error while Connecting");
    db = client.db('mongoDBApp');
    app.listen(port,() =>{
        console.log(`listening on port ${port}`)
  })

})