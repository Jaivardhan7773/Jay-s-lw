const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    courseTitle: String,
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
  }, { versionKey: false });
  const Comment = mongoose.model('Comment', CommentSchema);

  module.exports = Comment;

