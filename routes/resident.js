var mongo = require("./dbconfig");

var TAG = "RESIDENT : ";
var result = {};
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({service: 'Gmail',
                                            auth:{
                                                user: 'cmpe275ireport@gmail.com',
                                                pass: 'chaashvinasv'
                                            }
});

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
            var colll = mongo.collection('residentSettings')
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
                        colll.insertOne(
                            {
                                "_id": req.body.email,
                                "emailNotification": 1,
                                "statusChange": 1,
                                "anonymous": 0
                            },function(err, docs){
                                if(err){
                                    result.code=208;
                                    result.status="Failed to add the new resident to DB";
                                    res.json(result);
                                }else{
                                    result.code=200;
                                    result.status="Successfulky added a new resident";
                                    var mailOptions = {
                                        from: '"CMPE275" <cmpe275@gmail.com>', // sender address
                                        to: req.body.email, // list of receivers
                                        subject: 'Welcome to iReport', // Subject line
                                        text: 'Welcome from iReport', // plaintext body
                                        //html: '<b>Hello world ?</b>' // html body
                                    };
                                    transporter.sendMail(mailOptions, function(error, info){
                                        if(error){
                                            return console.log(error);
                                        }
                                        console.log('Message sent: ' + info.response);
                                    });
                                    res.json(result);
                                }
                            }
                        )
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
            console.log(req.body.resident_id);
            console.log(TAG + "Connected to DB");
            coll.update(
                {
                    "_id": req.body.resident_id,},
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

exports.updateSettings = function (req,res) {
    console.log(TAG + "Updating user Settings");
    var result = {};
    mongo.connect(function (err, db) {
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            var coll = mongo.collection('residentSettings')
            console.log(req.body.resident_id);
            console.log(TAG + "Connected to DB");
            coll.update(
                {
                    "_id": req.body.resident_id,},
                {$set:{
                    "emailNotification": req.body.emailNotification,
                    "statusChange": req.body.statusChange,
                    "anonymous": req.body.anonymous
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
            	console.log(req.body.resident_id);
		coll.findOne(
                {
                    "_id": req.body.resident_id

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

exports.getResidentSettingsData = function(req, res) {


    console.log(TAG + "Getting Resident Settings Data");
    var result = {};
    mongo.connect(function (err, db) {
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            var coll = mongo.collection('residentSettings')
            console.log(TAG + "Connected to DB");
            console.log(req.body.resident_id);
            coll.findOne(
                {
                    "_id": req.body.resident_id

                },function(err, docs){
                    if(err){
                        result.code=208;
                        result.status="Failed to get settings dta";
                        res.json(result);
                    }else{
                        result.code=200;
                        result.status="Successfully got settings data";
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
			"resident_id": req.body.resident_id,
                        "lat_loc":req.body.lat_loc,
                        "lon_loc":req.body.lon_loc,
                   	"desc_report":req.body.desc_litter,
                    	"size_litter": req.body.size_litter,
                    	"severity_litter": req.body.severity_litter,
                    	"status_litter": req.body.status_litter,
                    	"date": req.body.date,
			"anonymoui_setting": req.body.anonymous_setting,
                	//"time":req.body.time,
                    	"image_litter":req.body.image_litter
                },function(err, docs){
                    if(err){
                        result.code=208;
                        result.status="Failed to add new report";
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
    console.log(TAG + req.body.report_id);
    console.log(TAG + req.body.status_litter);
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
            var ObjectId = require('mongodb').ObjectId;
            var id = req.body.report_id;
            var o_id = new ObjectId(id);

            var residentColl = mongo.collection('residentSettings')
            console.log(req.body.resident_id);

            var sendEmailRequired = false;

            residentColl.findOne(
                {
                    "_id": req.body.resident_id

                },function(err, docs){
                    if(err){
                        sendEmailRequired = false;
                        console.log(TAG + "Unable to get settings");
                    }else{
                        console.log(docs);
                        if(docs.anonymous === 0){
                            if(docs.emailNotification === 1){
                                if(docs.statusChange === 1){
                                    sendEmailRequired = true;
                                }
                            }
                        }
                        console.log(TAG + "email " + sendEmailRequired);
                        coll.update(
                            {
                                "_id": o_id
                            },
                            {$set:{
                                "status_litter": req.body.status_litter,
                            }
                            },function(err, docs){
                                if(err){
                                    result.code=208;
                                    result.status="Failed to update report";
                                    res.json(result);
                                }else{
                                    if(sendEmailRequired){
                                        var mailOptions = {
                                            from: '"iReport" <cmpe275@gmail.com>', // sender address
                                            to: req.body.resident_id, // list of receivers
                                            subject: 'Report Status Change', // Subject line
                                            text: 'Your status report with ' + req.body.report_id + 'has changed to ' + req.body.status_litter, // plaintext body
                                            //html: '<b>Hello world ?</b>' // html body
                                        };
                                        transporter.sendMail(mailOptions, function(error, info){
                                            if(error){
                                                console.log(error);
                                            }else{
                                                console.log('Message sent: ' + info.response);
                                            }
                                        });
                                    }
                                    result.code=200;
                                    result.status="Successfully updated report";
                                    res.json(result);
                                }
                            }
                        )
                    }
                }
            )

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
            console.log(req.body.resident_id);
            coll.find({
                    "resident_id":req.body.resident_id
                }).toArray(function(err, docs){
                    if(err){
                        result.code=208;
                        result.status="Failed to get report";
                        res.json(result);
                    }else{
                        result.code=200;
                        result.status="Successfully sent report";
                        result.data = docs;
			res.json(result);
                    }
                }
              );
              }
           }
         );
        };


exports.getReportRid = function(req, res){
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
                console.log(req.body.report_id);
                coll.findOne(
                    {
                        "_id": req.body.report_id

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
        }
    );
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
