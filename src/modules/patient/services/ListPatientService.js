const Patient = require("../models/Patient");

exports.execute = async () => {
  const patient = await Patient.find();

  if (!patient) throw new Error("No Patient were found");

  return patient;
};
