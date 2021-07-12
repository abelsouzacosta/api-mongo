const mongoose = require("../../../shared/http/db");
const OwnerSchema = require("../schemas/OwnerSchema");

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;
