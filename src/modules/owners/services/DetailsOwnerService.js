const Owner = require("../models/Owner");
const Car = require("../../cars/models/Car");

exports.execute = async ({ id }) => {
  const car = await Car.find().where("owner").equals(id).populate("owner");

  if (!car) throw new Error("Nothing was found");

  return car;
};
