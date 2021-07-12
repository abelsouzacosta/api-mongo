const mongoose = require("../../../shared/http/db");

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
});

module.exports = AddressSchema;
