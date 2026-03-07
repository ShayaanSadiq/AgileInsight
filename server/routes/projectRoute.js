const router = require("express").Router();
const {
  getAllProjects,
  getProjectController,
  createProjectController,
  deleteProjectController,
} = require("../controllers/projectController.js");
const WrapAsync = require("../utils/WrapAsync.js");

router.get("/get-all/:orgId", getAllProjects);
router.get("/get/:id", WrapAsync(getProjectController));
router.post("/create", WrapAsync(createProjectController));
router.delete("/delete/:id", deleteProjectController);

module.exports = router;
