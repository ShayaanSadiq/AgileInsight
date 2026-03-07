const Sprint = require("../models/sprint.js");

const createSprint = async (req, res) => {
  let { title, startDate, endDate, tasks, projectId } = req.body;
  await Sprint.create({
    title,
    startDate,
    endDate,
    tasks,
    projectId,
  });
  res.send({ status: true, message: "Sprint created successfully." });
};

module.exports = {
  createSprint,
};
