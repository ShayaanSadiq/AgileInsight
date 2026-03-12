const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  orgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organization",
  },
});

const projectModel = mongoose.model("project", projectSchema);
module.exports = projectModel;
