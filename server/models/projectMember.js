const { boolean } = require("joi");
const mongoose = require("mongoose");

const projectMemberSchema = mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
  role: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  isEdited: {
    type: Boolean,
    default: false,
  },
});

const projectMemberModel = mongoose.model("projectMember", projectMemberSchema);
module.exports = projectMemberModel;
