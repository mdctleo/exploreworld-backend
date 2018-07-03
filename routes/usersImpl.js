var db = require('./server');
var credentialVault = require('./credentialVault');
var errors = require('./error');


// const TABLE_USERS = "users";

function createUser(user, res){

    var password = credentialVault.hashPassword(user.password);
    var email = user.email;
    var username = user.username;

    var values = [[email, username, password]];
    var sql = "INSERT INTO " + db.TABLE_USER + "(" + db.COLUMN_EMAIL + "," + db.COLUMN_USERNAME + "," + db.COLUMN_PASSWORD + ")" + " VALUES ?";
    db.database.query(sql, [values], function(err, result){
        if(err) {
            console.log(err);
            res.status(500);
            res.json({"error": err, "payload": err.message});
        }else{
           credentialVault.createFingerprint(result.insertId);
            res.status(200);
            res.json({"error": null, "payload": "test"})
        }
    });

}


function authenticateUser(user, res, req){
    var email = user.email;
    var password = user.password;
    var fingerprint = null;


    var sql = "SELECT " + db.COLUMN_EMAIL + ", " + db.COLUMN_PASSWORD + ", " + db.COLUMN_FINGERPRINT +
        " FROM " + db.TABLE_USER + " WHERE " + db.COLUMN_EMAIL + " = ?";
    db.database.query(sql, [email], function(err, result, fields){
        if(err){
            console.log(err);
            res.status(500);
            res.json({"error": err, "payload": err.message});
        }else{
            if(result.length === 0){
                res.status(400);
                res.json({"error" : errors.invalidCrendentials.type, "payload": errors.invalidCrendentials.message});
                return;
            }

            if(checkPassword(password, result[0].password)){
                fingerprint = result[0].fingerprint;
            }

            if(fingerprint == null){
                res.status(400);
                res.json({"error": errors.invalidCrendentials.type, "payload": errors.invalidCrendentials.message});
            }else {
                req.session.user = fingerprint;
                res.status(200);
                res.json({"error": null, "payload": fingerprint});
            }
        }
    });

}

function checkPassword(clientPassword, dbPassword){
    var hashedClientPassword = credentialVault.hashPassword(clientPassword);

   return hashedClientPassword === dbPassword;

}

module.exports = {
    createUser: createUser,
    authenticateUser: authenticateUser
};