var express = require('express');
var router = express.Router();
var pictureImpl = require('./pictureImpl');
var errors = require('./error');

//Initial picture request
router.get('/initpicture', function(req, res){
    var fingerprint = req.session.user;

    if (fingerprint == null) {
        res.status(400);
        res.json({"error": errors.authorization.status, "payload": errors.authorization.message });

    }else{
        pictureImpl.getInitPictures(fingerprint).then(
            function(result){
                var pictures = result;
                res.status(200);
                res.json({"error": null, "payload": pictures});
            }).catch(function(err){ //resolve errors here
                res.status(500);
                res.json({"error": errors.initPics.status, "payload": err.initPics.message});
        })

    }

});

module.exports = router;
