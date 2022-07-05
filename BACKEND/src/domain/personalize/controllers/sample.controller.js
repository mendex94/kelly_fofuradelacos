const { Request, Response } = require("express");
const orderService = require("../services/index");

const OrdersController = {

  async postOrder(req, res) {
    try {
      const orders = await orderService.allProducts();
      return res.status(200).json(await orders);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
}

module.exports = OrdersController;
