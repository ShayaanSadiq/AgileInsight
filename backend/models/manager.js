const mongoose = require("mongoose");

const managerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const managerModel = mongoose.model("manager", managerSchema);

module.exports = managerModel;
