const mongoose = require("mongoose");

module.exports = mongoose.model("Plan", new mongoose.Schema({
  name: String,
  min: Number,
  max: Number,
  dailyROI: Number,
  duration: Number
}));
