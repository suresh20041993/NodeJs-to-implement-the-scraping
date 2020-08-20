var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');


var app = express();
var port =8081;

var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})
