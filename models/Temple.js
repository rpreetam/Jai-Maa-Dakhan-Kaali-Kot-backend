// models/Temple.js
const mongoose = require("mongoose");

const TempleSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  renovationCost: Number,
});

module.exports = mongoose.model("Temple", TempleSchema);
