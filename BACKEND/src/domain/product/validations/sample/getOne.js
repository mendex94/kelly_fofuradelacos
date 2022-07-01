const { validate, Joi } = require ("express-validation");

const getOne = validate({
  params: Joi.object({
   
  }),
});

module.exports = getOne