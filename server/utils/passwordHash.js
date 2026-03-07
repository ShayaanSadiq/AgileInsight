const bcrypt = require("bcrypt");

const bcryptPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
  const isCorrect = await bcrypt.compare(password, hashedPassword);
  return isCorrect;
};

module.exports = { bcryptPassword, comparePassword };
