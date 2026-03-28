const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  orgId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "organisation",
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

const projectModel = mongoose.model("project", projectSchema);

module.exports = projectModel;
