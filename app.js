var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var resident = require('./routes/resident');
var official = require('./routes/official');
var report = require('./routes/report');

app.get("/",function(req, res){});

//request handlers for Resident
app.get("/registerNewResident",resident.addNewResident);
app.get("/updateResident", resident.updateNewResident);
app.get("/reports",resident.getResidentData);
app.get("/fileReport",resident.fileReport);
app.get("/updateReport",resident.fileReport);
app.get("/deleteReport",resident.fileReport);

//request handlers for Official
app.get("/officialNewRegister",official.addNewOfficial);
app.get("/updateOfficial",official.updateOfficial);
app.get("/allReports",official.allreports);



app.listen(80);
