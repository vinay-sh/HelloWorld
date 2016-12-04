var express = require("express");
var app = express();

var resident = require('./routes/resident');
var official = require('./routes/official');
var report = require('./routes/report');

app.get("/",function(req,res){
        res.send("<h1>Hello from EC2</h1>");
});


app.listen(80);
