const { Request, Response } = require('express')
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
};


module.exports = ProductsController