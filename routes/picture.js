var express = require('express');
var router = express.Router();
var pictureImpl = require('./pictureImpl');
var errors = require('./error');

//Initial picture request
router.post('/initpicture', function(req, res){
    var fingerprint = req.body.fingerprint;
    console.log(fingerprint);

    if (fingerprint == null) {
        res.status(400);
        res.json({"error": errors.invalidFingerPrint.type, "payload": errors.invalidFingerPrint.message });
        return;
    }
        try {
            var segments = pictureImpl.createSession(fingerprint);
        } catch (err) {
            res.status(500);
            res.json({"error": err, "payload": err.message});
        }

        res.status(200);
        res.json({"error": null, "payload": segments});

});

module.exports = router;
