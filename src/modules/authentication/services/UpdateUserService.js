const User = require("../models/User");

exports.execute = async ({ id, name, email }) => {
  const user = await User.findById(id);

  if (!user) throw new Error("User not found");

  user.name = name || user.name;
  user.email = email || user.email;

  user.save();

  return user;
};
