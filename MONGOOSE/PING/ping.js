const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("mongodb is connected"))
  .catch((e) => console.log(e));


  app.get('/ping', (req, res) => {
    res.status(200).send('Server is up!');
  });

  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });