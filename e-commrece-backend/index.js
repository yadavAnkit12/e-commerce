const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
const mongoose = require('mongoose');

app.use(express.json())

var mongoURI = 'mongodb+srv://ay1222926:ecommerce@cluster0.6u6iunq.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo =  () => {
     mongoose.connect(mongoURI)
     .then( ()=>
        console.log("mongoDB connected Successful")
    )
}

connectToMongo()

app.use(require("./router/savingUser"))
app.use(require("./router/Product"))
app.use(require("./router/cart"))
app.use(require('./router/payments'))
app.listen(5000,()=>console.log("server is running"))