var mongo = require("./dbconfig");

var TAG = "RESIDENT : ";
var result = {};

exports.addNewResident = function(req, res){
    console.log(TAG + "Adding resident");
    mongo.connect(function(err, db){
    	if(err){
			console.log(TAG + "Unable to connect to DB");
			result.code = 209;
			result.status = TAG + "Unable to connect to DB";
			res.json(result);
		}else{
			console.log(TAG + "Connected to DB");
			var coll = mongo.collection('resident');
			coll.find().toArray(function(err, docs){
			    if(docs){
                    result.code = 400;
                    result.status = "successful";
                    result.data = docs;
                    res.json(result);
                }else{
			        result.code = 208;
			        result.status = "Unable to get data";
			        res.json(result)
                }
            });
		}
    });
};

exports.updateNewResident = function (req,res) {
	console.log(TAG + "Updating user");
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

exports.fileReport = function(req, res){
    console.log(TAG + "Filing Report");
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

exports.updateReport = function(req, res){
    console.log(TAG + "Updating Report");
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