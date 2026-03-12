const { verifyJwtToken } = require("../utils/jawtToken.js");
const ExpressError = require("../utils/ExpressError");

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new ExpressError(401, "User not logged in");
  }

  try {
    const decoded = verifyJwtToken(token);

    req.user = decoded.id;

    next();
  } catch (err) {
    console.log("JWT ERROR:", err.message);
    throw new ExpressError(401, "Invalid token");
  }
};

module.exports = isAuthenticated;
