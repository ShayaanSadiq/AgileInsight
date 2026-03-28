const User = require("../../models/user.js");
const { createToken } = require("../../utils/jwt.js");
const { hashPassword, verifyPassword } = require("../../utils/bcrypt.js");

const loginController = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) throw new Error("Email or Password not given.");

  const findUser = await User.findOne({ email });
  if (!findUser) return res.send({ status: false, message: "user not found" });
  const isVerified = await verifyPassword(findUser.password, password);
  const token = createToken(findUser.id);
  res.cookie("token", token);
  res.send({ status: true, message: "user found successfully", token });
};

const signupController = async (req, res) => {
  let { name, email, password } = req.body;
  if (!email || !password || !name)
    throw new Error("Email or Password not given.");

  const findUser = await User.find({ email });
  if (!findUser.length == 0)
    return res.send({ status: false, message: "manager already exists" });
  const securedPassword = await hashPassword(password);
  const newUser = await User.create({
    name,
    email,
    password: securedPassword,
  });
  const token = createToken(newUser.id);
  res.cookie("token", token);
  res.send({ status: true, message: "user created successfully", token });
};

module.exports = { loginController, signupController };
