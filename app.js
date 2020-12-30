const express = require("express");
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000;
const indexpage = require("./route/indexpage")
const users = require("./route/user")

//EJS 
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes 
app.use('/', indexpage);
app.use('/users', users);

app.listen(port , function(){
    console.log("Listening in port : " +port);
    });