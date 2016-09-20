var express = require('express');
var router = express.Router();
var basicAuth = require('basic-auth');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/admin', auth, function(req, res, next) {
    res.render('content_manager');
});

function auth(req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
    };

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    };

    if (user.name === 'jagan' && user.pass === 'demacianjustice') {
        return next();
    } else {
        return unauthorized(res);
    };
};

module.exports = router;
