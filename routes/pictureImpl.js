var db = require('./server');


// function createSession(fingerprint){
//     //creates a session for user
//     var values = [[fingerprint, 2]];
//     var sql = "INSERT INTO " + db.TABLE_SESSION + "(" + db.COLUMN_S_USER_FINGERPRINT + "," + db.COLUMN_S_SEGMENT_COUNT +  ")" + " VALUES ?";
//     db.database.query(sql, [values], function(err, result){
//         if(err) {
//             throw err;
//         }else{
//            return getInitPictures(result.insertId);
//         }
//     });
//
// }


function getInitPictures(sessionId, res){

    var segments = createSegments(sessionId, 2);

    var values = segments;
    var sql = "INSERT INTO " + db.TABLE_SEGMENT +
        "(" + db.COLUMN_SEG_SESSION_ID + ", " + db.COLUMN_SEG_PIC0 + ", " + db.COLUMN_SEG_PIC1 + ", "
            + db.COLUMN_SEG_PIC2 + ", " + db.COLUMN_SEG_PIC3 + ", " + db.COLUMN_SEG_PIC4 + ", " + db.COLUMN_SEG_PIC5 + ", "
            + db.COLUMN_SEG_PIC6 + ", " + db.COLUMN_SEG_PIC7 + ", " + db.COLUMN_SEG_PIC8 + ", " + db.COLUMN_SEG_PIC9
            + ")"
            + " VALUES ?";

    db.database.query(sql, [values], function(err, result){
        if(err) {
            res.status(500);
            res.json({"error": err, "payload": err.message});
        }else{
            res.status(200);
            res.json({"error": null, "payload": segments});
        }
    });
}

function createSegments(sessionId, num){
    var segments = [];
    var i;
    for(i = 0; i < num; i++){

        var segment = [];
        segment.push(sessionId);

        var x;
        for(x = 0; x < 10; x++){
            var randomInt = getRandomInt();
            while(checkDuplicates(segment.slice(1), randomInt)){
                randomInt = getRandomInt();
            }

            segment.push(randomInt);

            if(x === 9){
                segments.push(segment);
            }
        }
    }

    return segments;
}


function getRandomInt(){
    //db.PICTURE_MAX is how many pictures in db, assuming one indexing, this will return all possible pictures
    return Math.floor(Math.random() * Math.floor(db.PICTURE_MAX)) + 1;
}

function checkDuplicates(array, int){
    var counter = 0;
    array.filter(function(e){

        if(e === int){
            counter++;
        }
    });

    return counter >= 1;
}


module.exports = {
    // createSession: createSession,
    getInitPictures: getInitPictures
};