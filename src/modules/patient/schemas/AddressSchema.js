const mongoose = require("../../../shared/http/db");

const AddressSchema = new mongoose.Schema({
  country: {
    type: String,
    default: "Brasil",
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export default AddressSchema;
