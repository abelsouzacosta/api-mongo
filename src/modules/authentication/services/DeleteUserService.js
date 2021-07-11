const User = require("../models/User");

exports.execute = async ({ id }) => {
  const user = await User.findById(id);

  if (!user) throw new Error("user not found");

  const deleted = await User.findOneAndDelete(id);

  return deleted;
};
