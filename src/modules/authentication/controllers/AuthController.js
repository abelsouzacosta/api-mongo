const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(name, email, password);

    const user = await User.create({ name, email, password });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).send({
      error: `${error}`,
    });
  }
};
