const { default: mongoose } = require("mongoose");

const tutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  root: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Tutors", tutorSchema);
