var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blog = new Schema({
  serial: { type: Number, required: true, unique: true },
  title: String,
  category: { type: String, required: true },
  date: Date,
  tags: [{ tag: String }],
  abstract: String,
  text: String,
  images: [{
    imgpath: String,
    local: Boolean
  }],
  likes: Number,
  comments: [{
    author: String,
    comment: String,
    comment_likes: Number
  }]
});

var Blog = mongoose.model('Blog', blog);

module.exports = Blog;