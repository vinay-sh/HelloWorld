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
            var coll = mongo.collection('resident')
    	    console.log(req.body.email);
			console.log(TAG + "Connected to DB");
            coll.insertOne(
                {
                    "_id": req.body.email,
                    "name": req.body.name,
                    "screenName": req.body.screenName,
                    "email": req.body.email,
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
            var coll = mongo.collection('resident')
            console.log(req.body.id);
            console.log(TAG + "Connected to DB");
            coll.update(
                {
                    "_id": req.body.id,},
            {$set:{
                "name": req.body.name,
                "screenName": req.body.screenName,
                "address": req.body.address
            }
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

exports.getResidentData = function(req, res) {


	console.log(TAG + "Getting Resident Data");
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
            	console.log(req.body.id);
		coll.findOne(
                {
                    "_id": req.body.id

                },function(err, docs){
                    if(err){
                        result.code=208;
                        result.status="Failed to add the new resident to DB";
                        res.json(result);
                    }else{
                        result.code=200;
                        result.status="Successfulky added a new resident";
                        result.data = docs;

			console.log(docs);
			console.log(result.data);
			 res.json(result);
                    }
                }
            )

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
                    "res_id": req.body.id,
                       "latitude":req.body.lat,
                        "longitude":req.body.lon,
                    "description":req.body.desc,
                    "size": req.body.size,
                    "severity": req.body.severity,
                    "status": req.body.status,
                    //"date": req.body.date,
                   // "time":req.body.time,
                    "image":req.body.image


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

            console.log(TAG + "Connected to DB");

        }
    });
};

exports.getReport = function(req, res){
    console.log(TAG + "Getting Report");
    var result = {};
    mongo.connect(function (err, db) {
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{

            var coll = mongo.collection("reports");
            console.log(TAG + "Connected to DB");
            console.log(req.body.id);
            coll.find({
                    "_id":req.body.id
                }).toArray(function(err, docs){
                    if(err){
                        result.code=208;
                        result.status="Failed to get report";
                        res.json(result);
                    }else{
                        result.code=200;
                        result.status="Successfully sent report";
                        result.data = docs;

                        console.log(result.data);
                        res.json(result);
                    }
                }
            );
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
