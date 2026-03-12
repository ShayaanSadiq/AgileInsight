const Organization = require("../Models/organization.js");
const { bcryptPassword, comparePassword } = require("../utils/passwordHash.js");
const { jwtToken } = require("../utils/jawtToken.js");
const ExpressError = require("../utils/ExpressError.js");

// SIGNUP
const SignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await Organization.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcryptPassword(password);

    const newUser = await Organization.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwtToken(newUser.id);

    const user = {
      id: newUser._id,
    };

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // change to true in production (HTTPS)
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    });

    return res.status(200).json({
      status: true,
      message: "Signup successful",
      user,
    });
  } catch (err) {
    throw new ExpressError(err.status || 500, err.message);
  }
};

// LOGIN
const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await Organization.findOne({ email }).select("+password");

    if (!findUser) {
      return res.status(401).json({
        status: false,
        message: "User is not registered",
      });
    }

    const isCorrectPassword = await comparePassword(
      password,
      findUser.password,
    );

    if (!isCorrectPassword) {
      return res.status(401).json({
        status: false,
        message: "Login failed, password is incorrect",
      });
    }

    const token = jwtToken(findUser.id);

    const user = {
      id: findUser._id,
    };
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // change to true in production
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      status: true,
      message: "Login successful",
      user,
    });
  } catch (err) {
    throw new ExpressError(err.status || 500, err.message);
  }
};

// LOGOUT
const getLogoutController = (req, res) => {
  try {
    if (!req.cookies.token) {
      throw new ExpressError(400, "User is not logged in.");
    }

    res.clearCookie("token");

    return res.status(200).json({
      status: true,
      message: "Logged out successfully",
    });
  } catch (err) {
    throw new ExpressError(err.status || 500, err.message);
  }
};

// VERIFY USER
const isMeUserAuthenticated = async (req, res) => {
  try {
    const currUser = await Organization.findById(req.user);

    if (!currUser) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    const user = {
      id: currUser._id,
    };

    return res.status(200).json({
      status: true,
      message: "User authenticated",
      user,
    });
  } catch (err) {
    throw new ExpressError(err.status || 500, err.message);
  }
};

module.exports = {
  SignupController,
  LoginController,
  getLogoutController,
  isMeUserAuthenticated,
};
