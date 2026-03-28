const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
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
