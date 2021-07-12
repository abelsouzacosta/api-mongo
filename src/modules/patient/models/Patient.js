const mongoose = require("../../../shared/http/db");
const PatientSchema = require("../schemas/PatientSchema");

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
