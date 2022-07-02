const express = require('express')
const ProductsController = require('../domain/product/controllers/product.controller');
const ProductService = require('../domain/product/services/ProductService');


const routes = express.Router();

routes.get("/catalogo", ProductsController.getAll);

routes.get("/catalogo/destaques", ProductsController.getHighlights)

module.exports = routes;
