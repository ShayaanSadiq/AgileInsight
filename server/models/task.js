const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  taskType: {
    type: String,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organization",
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  status: {
    type: String,
  },
});

const taskModel = mongoose.model("task", taskSchema);
module.exports = taskModel;
