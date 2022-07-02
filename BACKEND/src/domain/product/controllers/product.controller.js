const { Request, Response } = require('express');
const { type } = require('os');
const productService = require('../services')

const ProductsController = {

  async getAll(req, res) {
    try {
      const Products = await productService.allProducts();
      return res.status(200).json(Products);
    } catch (error) {

      return res.status(500).json(error);
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