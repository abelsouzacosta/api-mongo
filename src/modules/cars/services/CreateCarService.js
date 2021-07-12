const Car = require("../models/Car");

exports.execute = async ({ brand, model, color, fab, owner }) => {
  const car = await Car.create({ brand, model, color, fab, owner });

  if (!car) throw new Error("There was an error ehwn trying to create a car");

  return car;
};
