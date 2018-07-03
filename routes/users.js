var express = require('express');
var router = express.Router();
var usersImpl = require('./usersImpl');
var errors = require('./error');



/* GET users listing. */
router.post('/createusers', function (req, res, next) {
    //Verify request here
        usersImpl.createUser(req.body, res);

});

router.post('/login', function (req, res, next) {
        usersImpl.authenticateUser(req.body, res, req);
});

module.exports = router;
