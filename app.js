var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({limit:'50mb',extended:false}));
app.use(bodyParser.json({limit:'50mb'}));

var resident = require('./routes/resident');
var official = require('./routes/official');
var report = require('./routes/report');

app.get("/",function(req, res){});

//request handlers for Resident
app.get("/registerNewResident",resident.addNewResident);
app.get("/updateResident", resident.updateNewResident);
app.get("/getResidentData",resident.getResidentData);
app.get("/fileReport",resident.fileReport);
app.get("/updateReport",resident.fileReport);
app.get("/deleteReport",resident.fileReport);
app.get("/getReport",resident.getReport);
app.get("/updateSettings",resident.updateSettings);


//request handlers for Official
app.get("/officialNewRegister",official.addNewOfficial);
app.get("/updateOfficial",official.updateOfficial);
app.get("/getAllReports",official.getAllReport);

//updateSettings

app.get("/updateSettings",resident.getAllReport);


app.listen(80);
