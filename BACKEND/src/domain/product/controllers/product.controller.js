const { Request, Response } = require('express')
const productService = require('../services')

const ProductsController = {
 
  async getTiaras(req, res) {
    try {
      const type = "tiara"
      const tiaras = await findProductByType(type);
      if (!tiaras.length > 0){
        return res.status(400).json("Não há tiaras cadastradas")
      } 
      return res.status(200).json(tiaras);
    } catch (error) {

      return res.status(500).json("Erro não catalogado");
    }
  },
};


module.exports = ProductsController