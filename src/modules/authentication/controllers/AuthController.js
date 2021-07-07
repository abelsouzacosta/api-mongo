const CreateUserService = require("../services/CreateUserService");
const AuthenticateUserService = require("../services/AuthenticateUserService");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await CreateUserService.execute({ name, email, password });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};

exports.authenticate = async (req, res) => {
  const { email, password } = req.body;

  try {
    const authenticatedUser = await AuthenticateUserService.execute({
      email,
      password,
    });

    return res.status(200).json(authenticatedUser);
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
    });
  }
};
