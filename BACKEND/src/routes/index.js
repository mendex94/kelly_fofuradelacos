const express = require('express')
const ProductsController = require('../domain/product/controllers/product.controller')


const routes = express.Router();

routes.get("/catalogo", ProductsController.getAll);

routes.get("/catalogo/tiaras", ProductsController.getTiaras);

module.exports = routes;
