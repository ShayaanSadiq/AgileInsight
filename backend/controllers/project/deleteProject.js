const Project = require("../../models/project.js");

const deleteProject = async (req, res) => {
    let {projectId} = req.params;
    if (!projectId) throw new Error("projectId not given");
    const deletedProject = await Project.findByIdAndDelete(projectId);
    if (!deletedProject) throw new Error("unable to delete");
    res.send({ status: true, message: "Project deleted successfully"});


}
module.exports = {deleteProject}