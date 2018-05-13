var express = require('express');
var router = express.Router();
var usersImpl = require('./usersImpl');


/* GET users listing. */
router.post('/createusers', function(req, res, next) {
    //Verify request here
    console.log(req.body);

    try{
    usersImpl.createUser(req.body);
    }catch(err){
        console.log(err);
        res.status(500);
        res.json({"error": err, "payload" : err.message});
    }

    res.status(200);
    res.json({"error": null, "payload": null })
});

module.exports = router;
