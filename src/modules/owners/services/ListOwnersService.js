const Owner = require("../models/Owner");

exports.execute = async () => {
  const owners = await Owner.find().populate("cars");

  if (!owners) throw new Error("No owner were found");

  return owners;
};
