const joi  = require('joi');

const updatePromiseSchema = joi.object({
    title:joi.string().required().trim().messages({
        'any.required': 'The title field is required',
        'string.empty': 'the title field is required',
        'string.base': 'the title field must to be a string'
    }).optional().options({convert: false}),
    status:joi.string().required().trim().message({
        'any.required': 'The status field is required',
        'string.empty': 'the status field is required',
        'string.base': 'the status field must to be a string'
    }).optional().options({convert: false})
});

module.exports = updatePromiseSchema;