var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var project = new Schema({
  serial: { type: Number, required: true, unique: true },
  title: String,
  category: { type: String, required: true },
  period: String,
  link: String,
  abstract: String,
  text: String,
  images: [{
    imgpath: String,
    local: Boolean
  }],
  tech: [String],
  endorsements: Number,
  likes: Number,
  comments: [{
    author: String,
    comment: String,
    comment_likes: Number,
    comment_dislikes: Number
  }],
  published: Boolean
});

var Project = mongoose.model('Project', project);

module.exports = Project;