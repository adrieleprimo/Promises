const joi = require('joi');

const userRegistrySchema = joi.object({
    firstname: joi.string().required().trim().messages({
        'any.required': 'The field firstname is required',
        'string.empty': 'The field firstname is required',
        'string.base': 'The field firstname must be a string'
    }),
    lastname: joi.string().required().trim().messages({
        'any.required': 'The field lastname is required',
        'string.empty': 'The field lastname is required',
        'string.base': 'The field lastname must be a string'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'The field email is required',
        'string.empty': 'The field email is required',  
        'string.email': 'The field email must be valid format'
    }),
    password: joi.string().required().messages({
        'any.required': 'The field password is required',
        'string.empty': 'The field password is required',
    })
});

module.exports = userRegistrySchema;