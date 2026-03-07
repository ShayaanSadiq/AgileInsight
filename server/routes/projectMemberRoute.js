const router = require("express").Router();
const {
  addProjectMembers,
} = require("../controllers/projectMemberController.js");
const WrapAsync = require("../utils/WrapAsync.js");

router.post("/add", addProjectMembers);

module.exports = router;
