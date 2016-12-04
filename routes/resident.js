var mongo = require("./dbconfig");

exports.addUser = function(req, res){
    console.log("Adding user");
    mongo.connect(function(err, db){
    				if(err){
    					console.log("Unable to connect to mongo");
    					result.code = 209;
    					result.status = "Unable to connect to mongo";
    					res.json(result);
    				}else{
    				    console.log("Connected to mongo");
    				}
    });
    res.send("<h1>Hello from EC2</h1>");
}