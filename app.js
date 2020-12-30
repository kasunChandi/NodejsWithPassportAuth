const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();
const port = 5000;
const indexpage = require("./route/indexpage")
const users = require("./route/user")

//EJS 
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({extended: false}));



//Routes 
app.use('/', indexpage);
app.use('/users', users);

//mongoose
mongoose
.connect("mongodb://localhost/FoodyShop",{useNewUrlParser:true , useUnifiedTopology: true})
.then(()=>console.log("connetion is success"))
.catch(err=> console.log("connection error ", err));


app.listen(port , function(){
    console.log("Listening in port : " +port);
    });