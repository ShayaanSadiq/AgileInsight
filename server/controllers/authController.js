const User = require("../Models/user.js");
const { bcryptPassword, comparePassword } = require("../utils/passwordHash.js");
const { jwtToken } = require("../utils/jawtToken.js");
const ExpressError = require("../utils/ExpressError.js");

const SignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email, password });
    if (existingUser)
      return res.json({ status: false, message: "User already exists" });
    const hashedPassword = await bcryptPassword(password);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwtToken(newUser.id);
    const user = {
      id: newUser._id,
    };
    res.cookie("token", token, {
      maxAge: 15 * 24 * 1024 * 1024 * 60,
    });
    return res
      .status(200)
      .json({ status: true, message: "Signup successfull", user });
  } catch (err) {
    throw new ExpressError(err.status, err.message);
  }
};

const LoginController = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email }).select("+password");
  if (!findUser)
    return res
      .status(401)
      .json({ status: false, message: "User is not registered" });
  const isCorrectPassword = await comparePassword(password, findUser.password);
  if (!isCorrectPassword)
    return res
      .status(401)
      .json({ status: false, message: "Login failed, Password is incorrect" });
  const token = jwtToken(findUser.id);
  const user = {
    id: findUser._id,
  };
  res.cookie("token", token, {
    maxAge: 15 * 24 * 1024 * 1024 * 60,
  });
  return res
    .status(200)
    .json({ status: true, message: "Login Successfull", user });
};

const getLogoutController = (req, res) => {
  if (!req.cookies.token) throw new ExpressError(400, "User is not logged in.");
  res.clearCookie("token");
  res.status(200).json({ status: true, message: "Logged out." });
};

const isMeUserAuthenticated = async (req, res) => {
  const currUser = await User.findById(req.user);
  let user = {
    id: currUser._id,
    photo: currUser.photo.url,
  };
  return res
    .status(200)
    .json({ status: true, message: "User authenticated.", user });
};

module.exports = {
  SignupController,
  LoginController,
  getLogoutController,
  isMeUserAuthenticated,
};
