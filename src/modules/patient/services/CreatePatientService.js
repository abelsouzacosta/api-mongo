const Patient = require("../models/Patient");
const Address = require("../models/Address");

// patient has an address -> 1:1

exports.execute = async ({ name, dateOfBirth, street, number }) => {
  const patient = await Patient.create({ name, dateOfBirth });

  if (!patient) throw new Error("It awas not possible to create the patient");

  // recover the _id of the patient to relate with the address
  const { _id } = patient;

  const address = await Address.create({ street, number, patient: _id });

  patient.address = address;

  return patient;
};
