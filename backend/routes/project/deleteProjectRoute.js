const router = require("express").Router()
const { deleteProject } = require("../../controllers/project/deleteProject")


router.delete("/delete",deleteProject)

module.exports = router
