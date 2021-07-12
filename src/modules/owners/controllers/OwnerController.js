const CreateOwnerService = require("../services/CreateOwnerService");

exports.create = async (req, res) => {
  const { name, sex, cpf } = req.body;

  try {
    const owner = await CreateOwnerService.execute({ name, sex, cpf });

    return res.status(200).json(owner);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};
