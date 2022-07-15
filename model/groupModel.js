const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  schoolId: {
    type: mongoose.Schema.ObjectId,
    ref: "school",
  },
});

const Group = mongoose.model("group", groupSchema);

module.exports = groupSchema;
