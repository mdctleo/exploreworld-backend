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


function getInitPictures(){

    return createSegments(2);
}

function createSegments(num){
    var segments = [];
    var i;
    for(i = 0; i < num; i++){

        var segment = [];

        var x;
        for(x = 0; x < 10; x++){
            var randomInt = getRandomInt();
            while(checkDuplicates(segment, randomInt)){
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