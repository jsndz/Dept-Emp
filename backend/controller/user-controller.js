const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: response,
      error: {},
      sucess: true,
      message: "created the User",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      sucess: false,
      message: error.message,
    });
  }
};

const signin = async (req, res) => {
  try {
    const response = await userService.signin(
      req.body.email,
      req.body.password
    );
    return res.status(200).json({
      data: response,
      error: {},
      sucess: true,
      message: " sign in successful",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      error: { error },
      sucess: false,
      message: "signin is unsuccessful",
    });
  }
};

module.exports = {
  create,
  signin,
};
