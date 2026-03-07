const joi = require("joi");
const ExpressError = require("../utils/ExpressError.js");

const userLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
    .string()
    .min(8)
    .max(20)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain uppercase, lowercase, number and special character",
      "string.min": "Password must be at least 8 characters long",
      "string.empty": "Password is required",
    }),
});

module.exports = userLoginSchema;
