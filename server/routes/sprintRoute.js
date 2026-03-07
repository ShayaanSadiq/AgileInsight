const router = require("express").Router();

const { createSprint } = require("../controllers/sprint.js");

router.post("/create", createSprint);

module.exports = router;
