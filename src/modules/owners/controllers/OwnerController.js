const CreateOwnerService = require("../services/CreateOwnerService");
const ListOwnersService = require("../services/ListOwnersService");
const DetailsOwnerService = require("../services/DetailsOwnerService");
const UpdateOwnerService = require("../services/UpdateOwnerService");

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

exports.details = async (req, res) => {
  const { id } = req.params;

  try {
    const owner = await DetailsOwnerService.execute({ id });

    return res.status(200).json(owner);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, sex, cpf } = req.body;

  try {
    const owner = await UpdateOwnerService.execute({ id, name, sex, cpf });

    return res.status(200).json(owner);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};
