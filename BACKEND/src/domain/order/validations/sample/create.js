const { validate, Joi } = require("express-validation");


const create = validate({
  body: Joi.object({  
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    total_order: Joi.decimal().required(),
    discount: Joi.decimal(),
    products_quantity: Joi.integer().required(),
    shipping_total: Joi.decimal().required(),
    id_product: Joi.integer().required,
    amount: Joi.integer().required(),
    unit_value: Joi.decimal().required(),
    percentage_discount: Joi.decimal().required(),
    id_product_size: Joi.string().required(),
    id_product_color: Joi.string.required(),
    id_product_material: Joi.string.required(),
  }),
});

module.exports = create;