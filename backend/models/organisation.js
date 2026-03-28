const mongoose = require("mongoose");

const organisationSchema = mongoose.Schema({
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

const organisationModel = mongoose.model("organisation", organisationSchema);

module.exports = organisationModel;
