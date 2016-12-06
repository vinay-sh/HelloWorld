var mongo = require("./dbconfig");

var TAG = "OFFICIAL : ";

exports.addNewOfficial = function(req, res){
    console.log(TAG + "Adding Official");
    var result = {};
    mongo.connect(function(err, db){
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            var coll = mongo.collection('official')
            console.log(TAG + "Connected to DB");
            coll.insertOne(
                {
                    "_id": req.body.email,
                    "email": req.body.email,
                    "name": req.body.name
                },function(err, docs){
                    if(err){
                        result.code=208;
                        result.status="Failed to add the new official to DB";
                        res.json(result);
                    }else{
                        result.code=200;
                        result.status="Successfully added a new official";
                        res.json(result);
                    }
                }
            )

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
    var result = {};
    mongo.connect(function(err, db){
        if(err){
            console.log(TAG + "Unable to connect to DB");
            result.code = 209;
            result.status = TAG + "Unable to connect to DB";
            res.json(result);
        }else{
            var coll = mongo.collection('official');
            console.log(TAG + "Connected to DB");

            coll.update(
                {"_id" : req.body.email},
                {
                    "_id": req.body.email,
                    "email": req.body.email,
                    "name": req.body.name
                },function(err, docs){
                    if(err){
                        result.code=208;
                        result.status="Failed to add the new official to DB";
                        res.json(result);
                    }else{
                        result.code=200;
                        result.status="Successfully added a new official";
                        res.json(result);
                    }
                }
            )
        }
    });
    res.send();
};