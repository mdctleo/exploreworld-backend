const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: "localhost",
//     user: "exploreworld",
//     password: "vkwWXLSXGB8vo6mz",
//     database: "exploreworld"
// });

var pool = mysql.createPool({
    connectionLimit : 10,
    host : "localhost",
    user : "exploreworld",
    password : "vkwWXLSXGB8vo6mz",
    database: "exploreworld"
});

//TODO: create connection pool


module.exports = {
    database: pool,

    //TABLE USERS CONSTANTS
    TABLE_USER: "users",
    COLUMN_ID : "id",
    COLUMN_FINGERPRINT: "fingerprint",
    COLUMN_EMAIL: "email",
    COLUMN_USERNAME: "username",
    COLUMN_PASSWORD: "password",

    //TABLE PICTURES CONSTANTS
    TABLE_PICTURES: "pictures",
    COLUMN_P_PICTUREID: "pictureid",
    COLUMN_P_ORIGINAL_NAME: "name",
    COLUMN_P_PICTURE_PATH: "picture_path",
    COLUMN_P_ORIGINAL_WIDTH: "original_width",
    COLUMN_P_ORIGINAL_HEIGHT: "original_height",

    //TABLE USERS_PICTURES CONSTANTS
    TABLE_USERS_PICTURES: "users_pictures",
    COLUMN_UP_ID: "id",
    COLUMN_UP_USER_FINGERPRINT: "user_fingerprint",
    COLUMN_UP_PICTURE_ID: "picture_id",






    PICTURE_MAX: 20
};
