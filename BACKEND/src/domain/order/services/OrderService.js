const { Orders } = require("../models");
const { Order_Details } = require("../models");
const { Customers } = require("../models");

const orderService = {
  async createOrder(req) {
    try {
      
       console.log(req.body);

     // const idcostumer = 1//getCostumerId(name, phone, email);

      const newOrder = await Orders.create({
        total_order:total_order,
        discount:discount,
        products_quantity:products_quantity,
        shipping_total:shipping_total,
        id_customer:1,
      });  


      const idOrderInserted = await newOrder.id;

      const newOrderDetail = await Order_Details.create({

        id_order: await idOrderInserted,
        id_product,
        amount,
        unit_value,
        total_value:unit_value*amount,
        percentage_discount,
        id_product_size,
        id_product_color,
        id_product_material
      });    
  } catch (error) {
    console.log(error);
  }
  },    
  async getCustomerId(name, phone, email) {
  const searchCustomer = await Customers.findAll({
    where: {
      name,
      phone,
      email
    }
  })
  if (!searchCustomer.length > 0) {
    return insertCustomer(name, phone, email)
  }
  return searchCustomer.id
},
  async insertCustomer(name, phone, email) {
  const createCustomer = await Customers.create({
    name,
    phone,
    email
  })
  return createCustomer.id
},
}

module.exports = orderService;