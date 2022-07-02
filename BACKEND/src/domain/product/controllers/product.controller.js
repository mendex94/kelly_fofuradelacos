const { Request, Response } = require("express");
const productService = require("../services/");

const ProductsController = {

  async getAll(req, res) {
    try {
      const products = await productService.allProducts();
      return res.status(200).json(await products);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
 

  async getHighlights(req, res) {
    try {
      const highlights = await productService.findHighlights();

      if (!highlights.length > 0) {
        return res.status(400).json("Não existem produtos em destaque");
      }
      return res.status(200).json(highlights);
    } catch (error) {
      return res.status(500).json("Erro não catalogado!");
    }
  },

  async getLacos(req, res) {
    try {
      const type_product = "laços";
      const lacos = await productService.getProductbyType(type_product);
      if (!lacos.length > 0) {
        return res.status(400).json("Não foi encontrado laços");
      }
      return res.status(200).json(lacos);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async getColecaoParis(req, res) {
    try {
      const type_product = "boina";
      const colecaoParis = await productService.getProductbyType(type_product);
      if (!colecaoParis.length > 0) {
        return res.status(400).json("Não foi encontrado Coleção Paris");
      }
      return res.status(200).json(colecaoParis);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async getTiaras(req, res) {
    try {
      const Products = await productService.allProducts();
      return res.status(200).json(Products);
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

module.exports = ProductsController;
