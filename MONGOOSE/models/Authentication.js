const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  number: Number,
  isAdmin: { type: Boolean, default: false },
  isPremium: { type: Boolean, default: false },
  selectedCourses: { type: [String], default: [] }
}, { versionKey: false });
const Authentication = mongoose.model('Auth', ProductSchema);
module.exports = Authentication;