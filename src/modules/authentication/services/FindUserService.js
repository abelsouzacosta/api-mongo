const User = require("../models/User");

exports.execute = async ({ email }) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("User not found");

  return user;
};
