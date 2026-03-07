const joi = require("joi");

const userSignupSchema = joi.object({
  photo: joi.string().uri(),
  name: joi.string().required(),
  email: joi.string().email().required(),
  phoneNumber: joi
    .string()
    .min(9)
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be exactly 10 digits",
    }),
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

module.exports = userSignupSchema;
