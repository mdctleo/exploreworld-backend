var express = require('express');
var router = express.Router();
var pictureImpl = require('./pictureImpl');
var errors = require('./error');

//Initial picture request
router.post('/initpicture', function(req, res){
    var fingerprint = req.session.user;
    console.log(fingerprint);

    if (fingerprint == null) {
        res.status(400);
        res.json({"error": errors.authorization.type, "payload": errors.authorization.message });

    }else{
        pictureImpl.getInitPictures(fingerprint, res);
    }

});

module.exports = router;
