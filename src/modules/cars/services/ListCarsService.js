const Car = require("../models/Car");

exports.execute = async () => {
  const cars = await Car.find().populate("owner");

  return cars;
};
