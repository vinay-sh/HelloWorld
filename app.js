var express = require("express");
var app = express();

var resident = require('./routes/resident');
var official = require('./routes/official');
var report = require('./routes/report');

app.get("/",resident.addUser);


app.listen(80);
