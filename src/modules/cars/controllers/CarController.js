const CreateCarService = require("../services/CreateCarService");

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
