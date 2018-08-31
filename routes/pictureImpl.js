var db = require('./server');
var errors = require('./error');


function getInitPictures(fingerprint){

    return new Promise(function(resolve, reject){

    createSegments(13, fingerprint)
        .then(function(result){
            return resolve(result);

    }).catch(function(err){
        return reject(err);
    })

});




}

function createSegments(num, fingerprint) {
    return new Promise(function (resolve, reject) {
        checkDuplicates(fingerprint)
            .then(function (result) {

                var arrDuplicates = result;
                var arrRandomInts = [];
                for (var i = 0; i < num; i++) {
                    var randomInt = getRandomInt();

                    while (arrDuplicates.find(function (curr) {
                        return curr === randomInt;
                    }) !== undefined) {

                        randomInt = getRandomInt();
                    }

                    arrDuplicates.push(randomInt);
                    arrRandomInts.push(randomInt);
                }

                return getPictures(arrRandomInts);

            })
            .then(function (result) {
                return resolve(result);
            })
            .catch(function (err) {
                // console.log(err);
                return reject(err);
            });

    });

}

function getPictures(arrRandomInts){

    return new Promise(function(resolve, reject){
        var sql = "SELECT " + db.COLUMN_P_PICTUREID + ", " + db.COLUMN_P_PICTURE_PATH + ", " + db.COLUMN_P_ORIGINAL_WIDTH + ", " + db.COLUMN_P_ORIGINAL_HEIGHT
                    + " FROM " + db.TABLE_PICTURES + " WHERE " + db.COLUMN_P_PICTUREID
                    + " IN (";
        var i;
        for(i = 0; i < arrRandomInts.length; i++){
           sql = sql + arrRandomInts[i] + ",";
        }

        sql = sql.substring(0, sql.length - 1);
        sql = sql + ");";

        db.database.query(sql, function(err, result, fields){

            if(err){
                return reject(err);
            }else{
                return resolve(result);
            }

    });

});
}


function getRandomInt(){
    //db.PICTURE_MAX is how many pictures in db, assuming one indexing, this will return all possible pictures
    return Math.floor(Math.random() * Math.floor(db.PICTURE_MAX)) + 1;
}

function checkDuplicates(fingerprint){

    return new Promise(function(resolve, reject){
    // SELECT picture_id FROM users_pictures WHERE user_fingerprint = 'OSPp2R';
    var sql = "SELECT " + db.COLUMN_UP_PICTURE_ID + " FROM " + db.TABLE_USERS_PICTURES
    + " WHERE " + db.COLUMN_UP_USER_FINGERPRINT + " = ?";

    db.database.query(sql, [fingerprint], function(err, result, fields){
        if(err){
           return reject(err);
        }else{
            return resolve(result);
        }
    });

});

}


module.exports = {
    // createSession: createSession,
    getInitPictures: getInitPictures
};