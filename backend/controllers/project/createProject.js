const Project = require("../../models/project.js");

const createProject = async (req, res) => {
  let { orgId, name, description } = req.body;
  if (!orgId || !name || !description) throw new Error("inputs not given");
  const newProject = await Project.create({ orgId, name, description });
  if (!newProject) throw new Error("unable to create new project");
  res.send({ status: true, message: "new project created successfully" });
};

module.exports = { createProject };
