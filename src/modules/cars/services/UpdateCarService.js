const Car = require("../models/Car");

exports.execute = async ({ id, brand, model, color, owner }) => {
  const car = await Car.findById(id);

  if (!car) throw new Error("Car not found");

  car.brand = brand || car.brand;
  car.model = model || car.model;
  car.color = color || car.color;
  car.owner = owner || car.owner;

  car.save();

  return car;
};
