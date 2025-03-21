const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/posts', async (req, res) => {
    try {
      const newPost = new Post(req.body);
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  });

  router.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  

  router.get('/courses/:id', async (req, res) => {
    try {
      const course = await Post.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found.' });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

  router.put('/posts/:id', async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found.' });
      }
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  router.put('/posts/:id', async (req, res) => {
    const { imageUrl } = req.body;
  
    if (!imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }
  
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { imageUrl },
      { new: true, runValidators: true }
    );
  
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
  
    res.json(updatedPost);
  });

  router.delete('/posts/:id', async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found.' });
      }
      res.json(deletedPost);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

  module.exports = router;