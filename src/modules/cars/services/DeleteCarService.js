const Car = require("../models/Car");

exports.execute = async ({ id }) => {
  const deleted = await Car.findByIdAndDelete(id);

  if (!deleted) throw new Error("Car not found");

  return !!deleted;
};
