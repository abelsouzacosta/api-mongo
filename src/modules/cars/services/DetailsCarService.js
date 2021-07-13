const Car = require("../models/Car");

exports.execute = async ({ id }) => {
  const car = await Car.findOne(id).populate("owner");

  if (!car) throw new Error("Car not found");

  return car;
};
