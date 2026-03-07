const jwt = require("jsonwebtoken");

const jwtToken = (payload) => {
  const token = jwt.sign({ id: payload }, "kuchbhisecretjwtka");
  return token;
};

const verifyJwtToken = (token) => {
  const result = jwt.verify(token, "kuchbhisecretjwtka");
  return result;
};

module.exports = { jwtToken, verifyJwtToken };
