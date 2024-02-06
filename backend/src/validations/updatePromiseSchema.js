const joi  = require('joi');

const updatePromiseSchema = joi.object({
    title:joi.string().required().trim().messages({
        'any.required': 'the field title is required',
        'string.empty': 'the field title is required',
        'string.base': 'the title field must to be a string'
    }),
    status:joi.string().trim().message({
        'any.required': 'the field status is required',
        'string.empty': 'the field status is required',
        'string.base': 'the status field must to be a string'
    })
});

module.exports = updatePromiseSchema;