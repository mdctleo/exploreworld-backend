const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "exploreworld",
    password: "vkwWXLSXGB8vo6mz",
    database: "exploreworld"
});

//TODO: create connection pool


module.exports = {
    database: con,

    //TABLE USERS CONSTANTS
    TABLE_USER: "users",
    COLUMN_ID : "id",
    COLUMN_FINGERPRINT: "fingerprint",
    COLUMN_EMAIL: "email",
    COLUMN_USERNAME: "username",
    COLUMN_PASSWORD: "password"
};
