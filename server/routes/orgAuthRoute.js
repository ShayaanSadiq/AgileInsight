const router = require("express").Router();
const {
  LoginController,
  SignupController,
  getLogoutController,
  isMeUserAuthenticated,
} = require("../controllers/orgAuthController.js");
const WrapAsync = require("../utils/WrapAsync.js");

router.get("/verify-me", isMeUserAuthenticated);
router.post("/signup", WrapAsync(SignupController));
router.post("/login", WrapAsync(LoginController));
router.get("/logout", getLogoutController);

module.exports = router;
