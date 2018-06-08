var db = require('./server');
var credentialVault = require('./credentialVault');

// const TABLE_USERS = "users";

function createUser(user){

    var password = credentialVault.hashPassword(user.password);
    var email = user.email;
    var username = user.username;

    var values = [[email, username, password]];
    var sql = "INSERT INTO " + db.TABLE_USER + "(" + db.COLUMN_EMAIL + "," + db.COLUMN_USERNAME + "," + db.COLUMN_PASSWORD + ")" + " VALUES ?";
    db.database.connect();
    db.database.query(sql, [values], function(err, result){
        if(err) {
            throw err;
        }else{
           credentialVault.createFingerprint(result.insertId);
        }
    });

}

module.exports = {
    createUser: createUser
};