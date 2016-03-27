var express = require('express');
var router = express.Router();
var Content = require('../models/content');

/* GET number of content blocks. */
// router.get('/content_count', function(req, res, next) {
//   Content.count({ serial : 1 }, function(err, count) {
//   	console.log(count);
//   	res.send(count);
//   });
// });

/* GET content block. */
router.get('/', function(req, res, next) {
  Content.find({},function(err, content_info) {
  	res.render('content', {
  		'blocks': content_info
  	});
  });
});

module.exports = router;