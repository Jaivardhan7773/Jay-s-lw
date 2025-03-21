const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    imageUrl: String,
    date: String,
    title: String,
    description: String,
    tags: [String],
    level: String,
  },
  { versionKey: false }
);

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
