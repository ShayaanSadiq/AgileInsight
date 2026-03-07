const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

// sentBy, sentTo, content

const createMessageSchema = joi.object({
  sentBy: joi.objectId().required(),
  sentTo: joi.objectId().required(),
  content: joi.string().allow("").optional(),
});

const editMessageSchema = joi.object({
  content: joi.string().required(),
  createdAt: joi.date().optional(),
});

module.exports = { createMessageSchema, editMessageSchema };
