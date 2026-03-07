const router = require("express").Router();
const {
  getAllTaskController,
  getTaskController,
  createTaskController,
  deleteTaskController,
} = require("../controllers/taskController.js");
const WrapAsync = require("../utils/WrapAsync.js");

router.get("/get-all/:projectId", getAllTaskController);
router.get("/get/:id", WrapAsync(getTaskController));
router.post("/create", WrapAsync(createTaskController));
router.delete("/delete/:id", deleteTaskController);

module.exports = router;
