const { Request, Response } = require("express");
const orderService = require("../services/");

const OrdersController = {

  async postOrder(req, res) {
    try {
      const newOrder = await orderService.createOrder(req.body);

      return res.status(200).json(newOrder)

    } catch (error) {
      console.log(error)
      return res.status(500).json("Erro ao fazer pedido!")
    }
  }
}
module.exports = OrdersController;
