const Owner = require("../models/Owner");

exports.execute = async ({ id, name, sex, cpf }) => {
  const owner = await Owner.findById(id);

  if (!owner) throw new Error("Owner not found");

  owner.name = name || owner.name;
  owner.sex = sex || owner.sex;
  owner.cpf = cpf || owner.cpf;

  owner.save();

  return owner;
};
