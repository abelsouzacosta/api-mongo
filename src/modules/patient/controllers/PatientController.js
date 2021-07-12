const CreatePatientService = require("../services/CreatePatientService");
const ListPatientService = require("../services/ListPatientService");

exports.index = async (req, res) => {
  try {
    const patients = await ListPatientService.execute();

    return res.status(200).json(patients);
  } catch (error) {
    return res.status(400).json({ error: `${error}` });
  }
};

exports.create = async (req, res) => {
  const { name, dateOfBirth, street, number } = req.body;

  try {
    const patient = await CreatePatientService.execute({
      name,
      dateOfBirth,
      street,
      number,
    });

    return res.status(200).json(patient);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};
