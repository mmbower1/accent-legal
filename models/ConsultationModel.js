const mongoose = require("mongoose");

const consultationSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please add an email."],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add valid email.",
    ],
  },
  phone: {},
  message: {
    type: String,
    required: [true, "Please add a description."],
    unique: true,
  },
  checkboxes: {},
  uscis: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Consultation = mongoose.model("Consultation", consultationSchema);

module.exports = Consultation;
