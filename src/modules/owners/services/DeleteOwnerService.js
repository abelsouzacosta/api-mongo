const Owner = require("../models/Owner");

exports.execute = async ({ id }) => {
  const deleted = await Owner.findByIdAndDelete(id);

  if (!deleted) throw new Error("Cannot delete owner");

  return !!deleted;
};
