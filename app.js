const express = require("express");
const path = require("path")
const settings = require('./settings');
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
//app
const app = express();
//Routes
const Routes = require('./Routes')
//DB
mongoose.connect(settings.MONGO_DB,{useNewUrlParser:true,useUnifiedTopology: true})

mongoose.connection.on('connected',()=>console.log("connected"))
//================//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/',Routes)

app.use(express.static('./public'))

//set engine
app.set("view engine","ejs")
app.set('views', path.join(__dirname, 'views'));

module.exports = app;