const joi = require("joi");

const editUserchema = joi.object({
  photo: joi.string().allow("", null).optional(),
  name: joi.string().optional(),
  email: joi.string().email().optional(),
  phoneNumber: joi
    .string()
    .min(9)
    .pattern(/^[0-9]{10}$/)
    .messages({
      "string.pattern.base": "Phone number must be exactly 10 digits",
    })
    .optional(),
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
  newPassword: joi
    .string()
    .min(8)
    .max(20)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])"))
    .messages({
      "string.pattern.base":
        "Password must contain uppercase, lowercase, number and special character",
      "string.min": "Password must be at least 8 characters long",
      "string.empty": "Password is required",
    })
    .optional(),
});

module.exports = editUserchema;
