const CreateCarService = require("../services/CreateCarService");
const ListCarsService = require("../services/ListCarsService");
const DeleteCarService = require("../services/DeleteCarService");
const UpdateCarService = require("../services/UpdateCarService");
const DetailsCarService = require("../services/DetailsCarService");

exports.index = async (req, res) => {
  const cars = await ListCarsService.execute();

  return res.status(200).json(cars);
};

exports.create = async (req, res) => {
  const { brand, model, color, fab, owner } = req.body;

  try {
    const car = await CreateCarService.execute({
      brand,
      model,
      color,
      fab,
      owner,
    });

    return res.status(200).json(car);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};

exports.delete_car = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await DeleteCarService.execute({ id });

    return res.status(200).json(deleted);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { brand, model, color, owner } = req.body;

  try {
    const car = await UpdateCarService.execute({
      id,
      brand,
      model,
      color,
      owner,
    });

    return res.status(200).json(car);
  } catch (error) {
    return res.status(401).json({
      error: `${error}`,
    });
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await DetailsCarService.execute({ id });

    return res.status(200).json(car);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};
