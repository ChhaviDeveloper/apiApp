let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let dotenv = require('dotenv');
let cors = require("cors")
dotenv.config();
let port = process.env.PORT || 9870;
let mongo = require('mongodb');
const nodemon = require('nodemon');
let mongoClient = mongo.MongoClient;
let mongoURL = "mongodb+srv://local:test123@mongodbapp.fk1a8.mongodb.net/?retryWrites=true&w=majority";
let db;

app.use(morgan("common"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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

app.get('/top_pick',(req,res)=>{
    db.collection('top_pick').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})
app.get('/deal_of_day',(req,res)=>{
    db.collection('deal_of_day').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})

app.get('/women_category_price',(req,res)=>{
    db.collection('women_category_price').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})
app.get('/men_category',(req,res)=>{
    db.collection('men_category').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})
app.get('/kids_category',(req,res)=>{
    db.collection('kids_category').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})

app.get('/beauty_grooming',(req,res)=>{
    db.collection('beauty_grooming').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})
app.get('/categories_to_bag',(req,res)=>{
    db.collection('categories_to_bag').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})


mongoClient.connect( mongoURL ,(err,client)=>{
    if(err) console.log("Error while Connecting");
    db = client.db("mongoDBApp");
    app.listen(port,() =>{
        console.log(`listening on port ${port}`)
  })

})