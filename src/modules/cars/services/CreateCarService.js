const Car = require("../models/Car");
const Owner = require("../../owners/models/Owner");

exports.execute = async ({ brand, model, color, fab, owner }) => {
  const car = await Car.create({ brand, model, color, fab, owner });

  if (!car) throw new Error("There was an error ehwn trying to create a car");

  const carOwner = await Owner.findById(owner);

  if (!carOwner) throw new Error("No Owner were found");

  carOwner.cars += car;

  return car;
};
