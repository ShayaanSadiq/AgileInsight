const projectMember = require("../models/projectMember.js");

const addProjectMembers = async (req, res) => {
  let { projectId, role, members } = req.body;
  if (!projectId || !role || !members)
    res.send({ status: false, message: "Adding members failed." });
  let currState = await projectMember.create({
    projectId: projectId,
    role: role,
    members,
  });

  res.send({ status: true, message: "Members added successfully.", currState });
};

module.exports = {
  addProjectMembers,
};
