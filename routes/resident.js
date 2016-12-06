var mongo = require("./dbconfig");

var TAG = "RESIDENT : ";
var result = {};

exports.addNewResident = function(req, res){
    console.log(TAG + "Adding resident");
    var result = {};
    mongo.connect(function(err, db){
    	if(err){
			console.log(TAG + "Unable to connect to DB");
			result.code = 209;
			result.status = TAG + "Unable to connect to DB";
			res.json(result);
		}else{
<<<<<<< HEAD
            var coll = mongo.collection('resident')
    	    console.log(req.body.email);
			console.log(TAG + "Connected to DB");
            coll.insertOne(
                {
                    "_id": req.body.email,
                    "first_name": req.body.fname,
                    "last_name": req.body.lname,
                    "email": req.body.email
                    "address": req.body.address
                },function(err, docs){
                    if(err){
                        result.code=208;
                        result.status="Failed to add the new resident to DB";
                        res.json(result);
                    }else{
                        result.code=200;
                        result.status="Successfulky added a new resident";
                        res.json(result);
                    }
                }
            )
		}
    });
};

exports.updateNewResident = function (req,res) {
	console.log(TAG + "Updating user");
    var result = {};
	mongo.connect(function (err, db) {
		if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
		}else{
			console.log(TAG + "Connected to DB");
		}
    });
};

exports.getResidentReports = function(req, res) {
	console.log(TAG + "Getting Resident Reports");
    var result = {};
    mongo.connect(function (err, db) {
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            var coll = mongo.collection('resident')
            console.log(TAG + "Connected to DB");

        }
    });
};

exports.fileReport = function(req, res){
    console.log(TAG + "Filing Report");
    var result = {};
    mongo.connect(function (err, db) {
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            var coll = mongo.collection('reports')
            console.log(TAG + "Connected to DB");
            coll.insertOne(
                {
                    "res_id": req.body.email,
                    "location": {
                        "latitude":req.body.lat,
                        "longitude":req.body.lon
                    },
                    "description":req.bosy.des
                    "size": req.body.size
                    "severity": req.body.severity
                    "status": req.body.status
                    "date": req.body.date
                    "time":req.body.time


                },function(err, docs){
                    if(err){
                        result.code=208;
                        result.status="Failed to add the new resident to DB";
                        res.json(result);
                    }else{
                        result.code=200;
                        result.status="Successfulky added a new report";
                        res.json(result);
                    }
                }
            )
        }
    });
};

exports.updateReport = function(req, res){
    console.log(TAG + "Updating Report");
    var result = {};
    mongo.connect(function (err, db) {
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            var coll = mongo.collection('resident')
            console.log(TAG + "Connected to DB");
        }
    });
};

exports.deleteReport = function(req, res){
    console.log(TAG + "Deleting Report");
    mongo.connect(function (err, db) {
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            console.log(TAG + "Connected to DB");
        }
    });
};