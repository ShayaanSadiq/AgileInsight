const { createProject } = require("../../controllers/project/createProject")
const router = require("express").Router()

router.post("/new",createProject)

module.exports = router 