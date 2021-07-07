const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.execute = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) throw new Error("User not found");

  const passwordCorrect = await bcrypt.compare(password, user.password);

  if (!passwordCorrect) throw new Error("Password incorrect");

  // retira a senha do objeto que vai ser retornado
  user.password = undefined;

  return user;
};
