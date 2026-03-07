const Task = require("../Models/task.js");
const ExpressError = require("../utils/ExpressError.js");

const getAllTaskController = async (req, res) => {
  let { projectId } = req.params;
  let tasks = await Task.find({ projectId: projectId });

  if (!tasks || tasks.length === 0)
    return res.json({ status: false, message: "No tasks found." });

  res
    .status(200)
    .json({ status: true, message: "tasks found successfully.", tasks });
};

const getTaskController = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let task = await Task.findById(id);

  res
    .status(200)
    .json({ status: true, message: "task found successfully.", task });
};

const createTaskController = async (req, res) => {
  try {
    let {
      title,
      description,
      taskType,
      projectId,
      assignedBy,
      assignedTo,
      status,
    } = req.body;

    let newTask = await Task.create({
      title,
      description,
      taskType,
      projectId,
      assignedBy,
      assignedTo,
      status,
    });
    res.status(200).json({
      status: true,
      message: "Task created successfully",
      newTask,
    });
  } catch (err) {
    throw new ExpressError(err.status, err.message);
  }
};

const deleteTaskController = async (req, res) => {
  let { id } = req.params;
  let result = await Task.findByIdAndDelete(id);
  res
    .status(200)
    .json({ status: true, message: "Message deleted successfully.", result });
};

module.exports = {
  getAllTaskController,
  getTaskController,
  createTaskController,
  deleteTaskController,
};
