const mongoose = require("../../../shared/http/db");

const OwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
    enum: ["m", "f", "M", "F"],
  },
  cpf: {
    type: String,
    requierd: true,
  },
  cars: {
    type: mongoose.Types.ObjectId,
    refs: "Car",
  },
});

module.exports = OwnerSchema;
