var express = require("express");
var app = express();

var resident = require('./routes/resident');
var official = require('./routes/official');
var report = require('./routes/report');

app.get("/",function(req, res){});

//request handlers for Resident
app.get("/registerNewResident",resident.addNewResident);
app.post("/updateResident", resident.updateNewResident);
app.get("/reports",resident.getResidentReports);
app.post("/fileReport",resident.fileReport);
app.post("/updateReport",resident.fileReport);
app.post("/deleteReport",resident.fileReport);

//request handlers for Official
app.post("/officialNewRegister",official.addNewOfficial);
app.post("/updateOfficial",official.updateOfficial);
app.post("/allReports",official.allreports);



app.listen(80);
