const User = require("../models/User");

exports.execute = async ({ name, email, password }) => {
  // verificar se já existe um usuário com o email passado
  const alreadyExists = await User.findOne({ email });

  if (alreadyExists) throw new Error("This email are already in use");

  const user = await User.create({ name, email, password });

  user.password = undefined;

  return user;
};
