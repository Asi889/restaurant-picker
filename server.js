const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./backend/routes/api');
require('dotenv').config();
const path = require('path');




app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())



app.use(express.static(path.join(__dirname, 'build')));


app.use(api)


const port =  3009;



app.listen((port), () => {
    console.log(`running on port ${port}, hell ya`);
});


mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/scrapewolt",{ useNewUrlParser: true,useUnifiedTopology: true})
