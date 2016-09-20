var express = require('express');
var router = express.Router();

/* GET content block. */
router.get('/', function(req, res, next) {
  	res.render('index');
});

module.exports = router;