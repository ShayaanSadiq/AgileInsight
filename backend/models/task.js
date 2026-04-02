const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "project"
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;
