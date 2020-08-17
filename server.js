var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
// var config = "mongodb://localhost:27017/employees";
// mongoose.connect(config,{useNewUrlParser: true})
//     .connection
//         .on('connected',function(){
//             console.log("successfully connected to "+ config)
//         })
//         .on('error',function(err){
//             console.log("database error "+ err)
//         })
var app = express();
var port =8081;
app.get('/', function(req, res){
    res.send("Hello from suresh...");var http = require("http");

    http.createServer(function (request, response) {
       // Send the HTTP header 
       // HTTP Status: 200 : OK
       // Content Type: text/plain
       response.writeHead(200, {'Content-Type': 'text/plain'});
       
       // Send the response body as "Hello World"
       response.end('Hello World\n');
    }).listen(5000);
    
    // Console will print the message
    console.log('Server running at http://127.0.0.1:8081/');
});
var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})