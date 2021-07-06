const CreateUSerService = require("../services/CreateUserService");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await CreateUSerService.execute({ name, email, password });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};
