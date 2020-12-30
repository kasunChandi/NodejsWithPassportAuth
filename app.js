const express = require("express");
const app = express();
const port = 5000;
const indexpage = require("./route/indexpage")
const users = require("./route/user")

app.use('/', indexpage);
app.use('/users', users);

app.listen(port , function(){
    console.log("Listening in port : " +port);
    });