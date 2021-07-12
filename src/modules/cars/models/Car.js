const mongoose = require("../../../shared/http/db");
const CarSchema = require("../schemas/CarSchema");

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;
