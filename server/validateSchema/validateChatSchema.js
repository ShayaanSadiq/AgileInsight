const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

const chatSchema = joi.object({
  photo: joi.string().allow("", null).optional(),
  name: joi.string().max(30).required(),
  createdBy: joi.objectId().required(),
  members: joi.array().items(joi.objectId()).required(),
  description: joi.string().allow("", null).optional(),
  isGroup: joi.boolean(),
  originalPhotoUser: joi.boolean(),
});

module.exports = chatSchema;
