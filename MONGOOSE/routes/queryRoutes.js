const express = require('express');
const router = express.Router();
const Query = require('../models/Query');


router.post('/Query' , async (req , res) => {
    const { name, email, website, text } = req.body;
    if (!name || !email || !text) {
      return res.status(400).json({ error: "Name, email, and text are required!" });
    }
    const query = new Query({ name, email, website, text });
    const savedQuery = await query.save();
    res.status(201).json(savedQuery);
  })
  
  
  //this is for getting all queries
  router.get('/GetQuery', async (req, res) => {
    try {
      const queries = await Query.find({});  // ✅ Used correct model name
      res.json(queries);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong fetching queries!" });
    }
  });
  
  
  
  //and finally this is for deleting the query
  router.delete('/Query/:id' , async (req , res) => {
    const { id } = req.params;
    await Query.findByIdAndDelete(id);
    res.json({ message: 'Query deleted successfully' });
  });


module.exports = router;