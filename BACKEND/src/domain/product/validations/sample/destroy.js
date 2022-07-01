const { validate, Joi } = require ("express-validation");

const destroy = validate({
  params: Joi.object({
    
  }),
});

module.exports = destroy