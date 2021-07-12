const mongoose = require("../../../shared/http/db");
const AddressSchema = require("../schemas/AddressSchema");

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
