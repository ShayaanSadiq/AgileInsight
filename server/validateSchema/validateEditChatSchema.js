const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

// photo, name, members, admins

const editChatSchema = joi.object({
  photo: joi.string().allow("", null).optional(),
  name: joi.string().max(30).optional(),
  members: joi.array().items(joi.objectId()),
  admins: joi.array().items(joi.objectId()),
  description: joi.string().allow("").optional(),
});

module.exports = editChatSchema;
