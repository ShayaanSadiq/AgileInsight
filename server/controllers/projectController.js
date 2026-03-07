const Project = require("../Models/project.js");
const ExpressError = require("../utils/ExpressError.js");

const getAllProjects = async (req, res) => {
  let { orgId } = req.params;
  const projects = await Project.find({ orgId: orgId });
  if (!projects) throw new ExpressError(400, "No chats available.");
  res
    .status(200)
    .json({ status: true, message: "projects found.", projects: projects });
};

const getProjectController = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) throw new ExpressError(401, "project is not found");
  res
    .status(200)
    .json({ status: true, message: "project found successfully", project });
};

const createProjectController = async (req, res) => {
  let { name, description, orgId } = req.body;

  await Project.create({
    name,
    description,
    orgId,
  });
  res
    .status(200)
    .json({ status: true, message: "Project created successfully" });
};

const deleteProjectController = async (req, res) => {
  let { id } = req.params;
  let result = await Project.findByIdAndDelete(id);
  if (!result) throw new ExpressError(401, "Project not found");
  res
    .status(200)
    .json({ status: true, message: "Project deleted successfully" });

  // mongoose middleware will handle that all deletions of chats from messages and users
};

module.exports = {
  getAllProjects,
  getProjectController,
  createProjectController,
  deleteProjectController,
};
