const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  if (!password) throw new Error("password not given");
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

const verifyPassword = async (hashedPassword, password) => {
  if (!hashedPassword || !password) throw new Error("arg not given");
  const isVerified = await bcrypt.compare(password, hashedPassword);
  if (!isVerified) throw new Error("incorrect password");
  return isVerified;
};

module.exports = { hashPassword, verifyPassword };
