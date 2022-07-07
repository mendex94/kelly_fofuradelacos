const { validate, Joi } = require ("express-validation");

const create = validate({
  body: Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),    
    description:Joi.string().required().min(10)
  }),
});

module.exports = {create}