const { validate, Joi } = require ("express-validation");

const create = validate({
  body: Joi.object({
    
  }),
});

module.exports = create