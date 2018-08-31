

const invalidFingerPrint = {
    status: "InvalidRequestParameter",
    message: "the provided fingerprint is invalid"
};

const invalidCredentials = {
    status: "InvalidCredentials" ,
    message: "the email or password provided is incorrect"
};

const authorization = {
    status: "InvalidAuthorization",
    message: "please log in to proceed"
};

const initPics = {
    status: "InitPicturesFailure",
    message: "Failed to retrive initial pictures"
};


module.exports = {
    invalidFingerPrint : invalidFingerPrint,
    invalidCrendentials: invalidCredentials,
    authorization : authorization,
    initPics :  initPics
};