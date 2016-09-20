var express = require('express');
var router = express.Router();
var Project = require('../models/project');

/* GET number of content blocks. */
// router.get('/content_count', function(req, res, next) {
//   Project.count({ serial : 1 }, function(err, count) {
//   	console.log(count);
//   	res.send(count);
//   });
// });

/* GET content block. */
router.get('/', function(req, res, next) {
  	
  	// Using MongoDB:
  	// Project.find({},function(err, content_info) {
  	// 	res.render('feed_cards', {
  	// 		'blocks': content_info
  	// 	});
  	// });

  	// Using JSON:
  	var projects = require('../data/projects.json');
  	res.render('feed_cards', {
		'blocks': projects
	});
});

/* GET project view. */
router.get('/project/:id', function(req, res, next) {
  	
  	// Using MongoDB:
  	// Project.findOne({serial : req.params.id},function(err, content_info) {
  	// 	res.render('project', {
  	// 		'block': content_info
  	// 	});
  	// });

  	// Using JSON:
  	var projects = require('../data/projects.json');
  	for( i = 0; i < projects.length; i++ ) {
  		if( projects[i].serial == req.params.id ) {
  			res.render('project', {
	  			'block': projects[i]
	  		});
  		}
  	}
});

module.exports = router;