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

    //TABLE SESSION CONSTANTS
    TABLE_SESSION: "session",
    COLUMN_S_USER_FINGERPRINT: "user_fingerprint",
    COLUMN_S_SEGMENT_COUNT: "segment_count",
    COLUMN_S_CREATED_DATE: "created_date",

    //TABLE SEGMENT CONSTANTS
    TABLE_SEGMENT: "segment",
    COLUMN_SEG_SESSION_ID: "session_id",
    COLUMN_SEG_PIC0: "picture_id0",
    COLUMN_SEG_PIC1: "picture_id1",
    COLUMN_SEG_PIC2: "picture_id2",
    COLUMN_SEG_PIC3: "picture_id3",
    COLUMN_SEG_PIC4: "picture_id4",
    COLUMN_SEG_PIC5: "picture_id5",
    COLUMN_SEG_PIC6: "picture_id6",
    COLUMN_SEG_PIC7: "picture_id7",
    COLUMN_SEG_PIC8: "picture_id8",
    COLUMN_SEG_PIC9: "picture_id9",
    COLUMN_SEG_RES0: "picture_id0",
    COLUMN_SEG_RES1: "picture_id1",
    COLUMN_SEG_RES2: "picture_id2",
    COLUMN_SEG_RES3: "picture_id3",
    COLUMN_SEG_RES4: "picture_id4",
    COLUMN_SEG_RES5: "picture_id5",
    COLUMN_SEG_RES6: "picture_id6",
    COLUMN_SEG_RES7: "picture_id7",
    COLUMN_SEG_RES8: "picture_id8",
    COLUMN_SEG_RES9: "picture_id9",








    PICTURE_MAX: 10
};
