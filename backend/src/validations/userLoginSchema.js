const joi = require('joi');

const userLoginSchema = joi.object({
    email:joi.string().email().required().messages({
        'any.required': 'The field email is required',
        'string.empty': 'The field email is required',
        'string.email': 'The field email must have a valid format'
    }),
    password:joi.string().required().messages({
        'any.required': 'The field password is required.',
        'string.empty': 'The field password is required.'
    })
});

module.exports = userLoginSchema;