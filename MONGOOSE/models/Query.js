const mongoose = require('mongoose');
const QuerySchema = new mongoose.Schema({
  name:String,
  email:String,
  website:String,
  text:String
},{versionKey:false});
const Query = mongoose.model('Query' , QuerySchema);

module.exports = Query;