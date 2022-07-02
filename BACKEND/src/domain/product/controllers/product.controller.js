const { Request, Response } = require('express');
const { type } = require('os');
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

  async getLacos(req, red) {
    try {
      const Lacos = await productService.getProductbyType(type);
      if (!type.length > 0) {
        return res.status(400).json("Não foi encontrado laços");
      }
      return res.status(200).json(Lacos);
    } catch (error) {

      return res.status(500).json(error);
    }
  },


  async getColecaoParis(req, red) {
    try {
      const ColecaoParis = await productService.getProductbyType(type);
      if (!type.length > 0) {
        return res.status(400).json("Não foi encontrado Coleção Paris");
      }
      return res.status(200).json(ColecaoParis);
    } catch (error) {

      return res.status(500).json(error);
    }
  },
}

module.exports = ProductsController