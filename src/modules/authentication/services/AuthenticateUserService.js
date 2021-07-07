const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.execute = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) throw new Error("User not found");

  const passwordCorrect = await bcrypt.compare(password, user.password);

  if (!passwordCorrect) throw new Error("Password incorrect");

  user.password = undefined;

  // gera o token jwt
  // tempo e expiração de 1 dia
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.HASH,
    {
      expiresIn: 86400,
    }
  );

  // retira a senha do objeto que vai ser retornado

  return [user, token];
};
