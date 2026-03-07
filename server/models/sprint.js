const mongoose = require("mongoose");

const sprintSchema = mongoose.Schema({
  title: {
    type: String,
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Date,
    default: Date.now(),
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "task",
    },
  ],
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
});

const sprintModel = mongoose.model("sprint", sprintSchema);
module.exports = sprintModel;
