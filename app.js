var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({limit:'5mb',extended:false}));
app.use(bodyParser.json({limit:'5mb'}));

var resident = require('./routes/resident');
var official = require('./routes/official');
var report = require('./routes/report');

app.get("/",function(req, res){});

//request handlers for Resident
app.get("/registerNewResident",resident.addNewResident);
app.get("/updateResident", resident.updateNewResident);
app.get("/getResidentData",resident.getResidentData);
app.get("/fileReport",resident.fileReport);
app.get("/updateReport",resident.updateReport);
//app.get("/deleteReport",resident.dele);
app.get("/getReport",resident.getReport);
app.get("/updateSettings",resident.updateSettings);

app.get("/getReportRid",resident.getReportRid);

//getReportRid



//request handlers for Official
app.get("/officialNewRegister",official.addNewOfficial);
app.get("/updateOfficial",official.updateOfficial);
app.get("/getAllReports",official.getAllReport);

//updateSettings



app.listen(80);
