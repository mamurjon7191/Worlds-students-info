const mongoose = require("mongoose");

const districtScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const District = mongoose.model("district", districtScheme);

module.exports = District;

// district bn school parent refencing boladi
