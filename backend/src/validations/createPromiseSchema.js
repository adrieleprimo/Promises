const joi = require('joi');

const createPromiseSchema = joi.object({
    title:joi.string().required().trim().messages({
        'any.required': 'the title field is required',
        'string.empty': 'the title field is required',
        'string.base': 'the title field must to be a string'
    })
});

module.exports = createPromiseSchema;
