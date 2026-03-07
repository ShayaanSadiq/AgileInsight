const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  orgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organization",
  },
});

const projectModel = mongoose.model("project", projectSchema);
module.exports = projectModel;
