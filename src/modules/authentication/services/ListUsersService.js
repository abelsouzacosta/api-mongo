const User = require("../models/User");

exports.execute = async () => {
  const users = await User.find();

  if (!users) throw new Error("No user was found in the database");

  return users;
};
