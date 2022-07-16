const mongoose = require("mongoose");

const studentScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  groupId: {
    type: mongoose.Schema.ObjectId,
    ref: "groups",
  },
});

const Student = mongoose.model("students", studentScheme);

module.exports = Student;
