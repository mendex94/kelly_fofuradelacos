const { validate, Joi } = require("express-validation");

const create = validate({
  body: Joi.object({  
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    total_order: Joi.number().required(),
    discount: Joi.number(),
    products_quantity: Joi.number().required(),
    shipping_total: Joi.number().required(),
    id_product: Joi.number().required(),
    amount: Joi.number().required(),
    unit_value: Joi.number().required(),
    percentage_discount: Joi.number().required(),
    id_product_size: Joi.string().required(),
    id_product_color: Joi.string().required(),
    id_product_material: Joi.string().required(),
  }),
});

const OrderValidation = {
  create
};

module.exports = OrderValidation


