const router = require("express").Router();
const {
  loginController,
  signupController,
} = require("../../controllers/user/authController");

router.post("/login", loginController);
router.post("/signup", signupController);

module.exports = router;
