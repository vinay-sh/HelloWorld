var mongo = require("./dbconfig");

var TAG = "OFFICIAL : ";

exports.addNewOfficial = function(req, res){
    console.log(TAG + "Adding Official");
    mongo.connect(function(err, db){
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            console.log(TAG + "Connected to DB");
        }
    });
    res.send();
};

exports.allreports = function(req, res){
    console.log(TAG + "Getting Reports");
    mongo.connect(function(err, db){
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            console.log(TAG + "Connected to DB");
        }
    });
    res.send();
};

exports.updateOfficial = function(req, res){
    console.log(TAG + "Updating Official");
    mongo.connect(function(err, db){
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            console.log(TAG + "Connected to DB");
        }
    });
    res.send();
};