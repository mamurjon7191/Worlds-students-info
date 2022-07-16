const mongoose = require("mongoose");

const schoolScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // parent referenc bolib ulandi school bn district
  districtId: {
    type: mongoose.Schema.ObjectId,
    ref: "districts",
  },
});

const School = mongoose.model("schools", schoolScheme);

module.exports = School;
