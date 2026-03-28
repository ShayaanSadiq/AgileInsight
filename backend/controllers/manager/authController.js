const Manager = require("../../models/manager.js");
const { createToken } = require("../../utils/jwt.js");
const { hashPassword, verifyPassword } = require("../../utils/bcrypt.js");

const loginController = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) throw new Error("Email or Password not given.");

  const findManager = await Manager.findOne({ email });
  if (!findManager)
    return res.send({ status: false, message: "manager not found" });
  console.log(findManager);
  const isVerified = await verifyPassword(findManager.password, password);
  const token = createToken(findManager.id);
  res.cookie("token", token);
  res.send({ status: true, message: "manager found successfully", token });
};

const signupController = async (req, res) => {
  let { name, email, password } = req.body;
  if (!email || !password || !name)
    throw new Error("Email or Password not given.");

  const findManager = await Manager.find({ email, password });
  if (!findManager.length == 0)
    return res.send({ status: false, message: "manager already exists" });
  const securedPassword = await hashPassword(password);
  const newManager = await Manager.create({
    name,
    email,
    password: securedPassword,
  });
  const token = createToken(newManager.id);
  res.cookie("token", token);
  res.send({ status: true, message: "user created successfully", token });
};

module.exports = { loginController, signupController };
