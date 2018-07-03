

const invalidFingerPrint = {
    type: "InvalidRequestParameter",
    message: "the provided fingerprint is invalid"
};

const invalidCredentials = {
    type: "InvalidCredentials" ,
    message: "the email or password provided is incorrect"
};

const authorization = {
    type: "InvalidAuthorization",
    message: "please log in to proceed"
};


module.exports = {
    invalidFingerPrint : invalidFingerPrint,
    invalidCrendentials: invalidCredentials,
    authorization : authorization
};