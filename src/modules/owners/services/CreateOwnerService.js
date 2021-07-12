const Owner = require("../models/Owner");

exports.execute = async ({ name, sex, cpf }) => {
  const owner = await Owner.create({ name, sex, cpf });

  if (!owner) throw new Error("Was not possible to register this owner");

  return owner;
};
