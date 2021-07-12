const Owner = require("../models/Owner");

exports.execute = async ({ id }) => {
  const owner = await Owner.findById(id);

  if (!owner) throw new Error("No owner found");

  return owner;
};
