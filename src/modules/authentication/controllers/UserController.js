const list = require("../services/ListUsersService");

exports.index = async (req, res) => {
  try {
    const users = await list.execute();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};
