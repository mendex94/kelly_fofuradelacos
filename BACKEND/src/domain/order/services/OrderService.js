const { Orders } = require("../models");
const { Order_Details } = require("../models");
const { Customers } = require("../models");

const OrderService = {
  async createOrder(data) {
    try {
      const {
        name,
        phone,
        email,
        total_order,
        discount,
        products_quantity,
        shipping_total,
        id_product,
        amount,
        unit_value,
        percentage_discount,
        id_product_size,
        id_product_color,
        id_product_material
      } = req.body

      const idcostumer = getCostumerId(name, phone, email);

      const newOrder = await Orders.create({
          idcustomer,
          date_order: new Date(),
          total_order,
          discount,
          products_quantity,
          shipping_total,
      })
      const newOrderDetail = await Order_Details.create({
        id_order,
        id_product,
        amount,
        unit_value,
        percentage,
        total_value,
        percentage_discount,
        id_product_size,
        id_product_color,
        id_product_material
      })
      return newOrder;

    } catch (error) {
      console.log(error);
    }
  },
  async getCustomerId(
    name,
    phone,
    email
  ) {
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
  async insertCustomer(
    name,
    phone,
    email
  ) {
    const createCustomer = await Customers.create({
      name,
      phone,
      email
    })
    return createCustomer.id
  }

}

module.exports = OrderService;