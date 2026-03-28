const jwt = require("jsonwebtoken");

const createToken = (id) => {
  if (!id) throw new Error("id not given.");
  const token = jwt.sign(id, "kuchbhisecretjwtka");
  return token;
};

module.exports = { createToken };
