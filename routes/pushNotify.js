var gcm = require('node-gcm');
var mongo = require("./dbconfig");


function constructNotification (resident_id){

    var uid;
    mongo.connect(function(err, db){
        if(err){
            console.log('unable to connect to mongo');
            return;
        }else{

            var coll = mongo.collection('resident')

            //console.log(myarr[i].user_id+' uid');
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
                //console.log(myarr[i].user_id)
        }
    });
}




function push( msg , header, device_tokens){

    var retry_times = 4; //the number of times to retry sending the message if it fails

    var sender = new gcm.Sender('AAAAD4R3RA8:APA91bG58VfaqxkvAU-f-Uq0OZEX1CbRT1e9cnmaA2fJUevGTtuHWhxPBeiA3D1nDpGUxqxBek91Sp4uE6B8UZqa1TFCh6lCqKrye-0Vir3_sr4CVAURQXgqHP1R1znhxEbnOWZnt9fygHAuHLOoBJySJJ94UBwDHw'); //create a new sender
    var message = new gcm.Message(); //create a new message

    message.addData('title', header );
    message.addData('message', msg);
    message.addData('sound', 'notification');

    message.collapseKey = 'testing'; //grouping messages
    message.delayWhileIdle = true; //delay sending while receiving device is offline
    message.timeToLive = 3; //the number of seconds to keep the message on the server if the device is offline

    console.log('in push msg & token : '+device_tokens);
//    console.log(message);
    //   console.log(message + " " + device_tokens  );
    sender.send(message, device_tokens, retry_times, function(result){
        console.log(result);
        console.log('push sent to: ' + device_tokens);
    });
}

exports.notify = function(id, type, callback){

    console.log("In notify method");

    if(type == 1 || type == 2 || type == 3){

        console.log(' notify type ' + type);
        console.log(' ID ' + id);
        if(type == 1 && id == null){
            console.log('in callback');
            callback();
        }else{
            mongo.connect(function(err, db){
                if(err){
                    console.log('unable to connect to mongo');
                    callback();
                }else{
                    var searchcol = mongo.collection('search_queries');

                    searchcol.find( {  "rate" : type } ).toArray(function(err, docs) {
                        if(docs){
                            const dc = docs;
                            var myArray = [];
                            for(var i=0; i<dc.length; i++){
                                //myArray.push({ "user_id":docs[i].user_id, "rate": docs[i].rate, "description":docs[i].description, "City":docs[i].City,"Zip": docs[i].Zip, "Make": docs[i].Make, "property_type":docs[i].property_type, "max_rent":docs[i].max_rent, "min_rent":docs[i].min_rent});
                                var ma = dc[i];
                                console.log('ma is ');
                                console.log(ma)
                                constructNotification1(ma, type, id);
                            }
//							console.log('length is '+ myArray.length);
//							constructNotification1(myArray, type, id);
                            callback();
                        }else{
                            console.log('No Docs');
                            callback();
                        }

                    });

                }
            });
        }
    }else{
        console.log('Invalid');
        callback();
    }
};