const CreateOwnerService = require("../services/CreateOwnerService");
const ListOwnersService = require("../services/ListOwnersService");

exports.index = async (req, res) => {
  try {
    const owners = await ListOwnersService.execute();

    return res.status(200).json(owners);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};

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
