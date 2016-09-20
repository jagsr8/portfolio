var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');

/* GET number of content blocks. */
// router.get('/content_count', function(req, res, next) {
//   Blog.count({ serial : 1 }, function(err, count) {
//   	console.log(count);
//   	res.send(count);
//   });
// });

/* GET content block. */
router.get('/', function(req, res, next) {
  Blog.find({},function(err, content_info) {
  	res.render('feed_cardlists', {
  		'blocks': content_info
  	});
  });
});

module.exports = router;