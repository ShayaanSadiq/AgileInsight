const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
    },
  ],
});

const organizationModel = mongoose.model("organization", organizationSchema);
module.exports = organizationModel;
