var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var content = new Schema({
  serial: { type: Number, required: true, unique: true },
  title: String,
  category: String,
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

// the schema is useless so far
// we need to create a model using it
var Content = mongoose.model('Content', content);

// make this available to our users in our Node applications
module.exports = Content;