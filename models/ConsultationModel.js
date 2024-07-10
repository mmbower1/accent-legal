const mongoose = require("mongoose");

const consultationSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name."],
  },
  email: {
    type: String,
    required: [true, "Please add an email."],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add valid email.",
    ],
  },
  phone: {
    type: String,
    required: [true, "Please add a phone number"],
  },
  message: {
    type: String,
    required: [true, "Please add a description."],
  },
  monday: {
    type: Boolean,
    default: false,
  },
  tuesday: {
    type: Boolean,
    default: false,
  },
  wednesday: {
    type: Boolean,
    default: false,
  },
  thursday: {
    type: Boolean,
    default: false,
  },
  friday: {
    type: Boolean,
    default: false,
  },
  morning: {
    type: Boolean,
    default: false,
  },
  afternoon: {
    type: Boolean,
    default: false,
  },
  evening: {
    type: Boolean,
    default: false,
  },
  uscis: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Consultation = mongoose.model("Consultation", consultationSchema);

module.exports = Consultation;
