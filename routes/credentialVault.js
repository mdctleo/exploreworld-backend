const crypto = require('crypto');
const db = require('./server.js');

//TODO: temporary, should get a better hashing library


function hashPassword(password) {
    var hash = crypto.createHash('sha256');

    hash.update(password);
    return(hash.digest('hex'));
}

function createFingerprint(insertId){
    var fingerprint = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++) {
        fingerprint += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    var sql = "SELECT " + db.COLUMN_FINGERPRINT +  " FROM " + db.TABLE_USER + " WHERE " + db.COLUMN_FINGERPRINT + " = ?";

    db.database.query(sql, [fingerprint], function(err, result){
        if(err) {
            throw err;
        }else{
            if(result.length > 0){
                createFingerprint(insertId);
            }else{
                 sql =  "UPDATE " + db.TABLE_USER + " SET " + db.COLUMN_FINGERPRINT + " = ? WHERE " + db.COLUMN_ID + " = ?";
                db.database.query(sql, [fingerprint, insertId], function(err, result){
                    db.database.end();
                    if(err){
                        throw err;
                    }else{
                    }
                });
            }
        }

    });

}

module.exports = {
    hashPassword: hashPassword,
    createFingerprint: createFingerprint
};