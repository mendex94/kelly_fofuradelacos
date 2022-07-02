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

  async getHighlights(req,res){
    try{
      const highlights = await productService.findHighlights();
      
      if(!highlights.length > 0){
        return res.status(400).json("Não existem produtos em destaque")
      }
      return res.status(200).json(highlights)

    }catch(error){
      return res.status(500).json("Erro não catalogado!")
    }
  }
};

module.exports = ProductsController