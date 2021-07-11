const list = require("../services/ListUsersService");
const update = require("../services/UpdateUserService");
const delete_service = require("../services/DeleteUserService");

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

exports.update = async (req, res) => {
  const { userId } = req;
  const { name, email } = req.body;

  try {
    const user = await update.execute({ id: userId, name, email });

    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};

exports.delete_user = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await delete_service.execute({ id });

    return res.status(200).json(!!user);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};
