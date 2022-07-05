const express = require('express');
const { postOrder } = require('../domain/order/controllers/order.controller');
const OrdersController = require('../domain/order/controllers/order.controller');
const ProductsController = require('../domain/product/controllers/product.controller');
const ProductService = require('../domain/product/services/ProductService');


const routes = express.Router();

routes.get("/catalogo", ProductsController.getAll);
//routes.get("/catalogo/:id", ProductsController.getProductById);

routes.get("/catalogo/destaques", ProductsController.getHighlights);
routes.get("/catalogo/lacos", ProductsController.getLacos);
routes.get("/catalogo/colecaoparis", ProductsController.getColecaoParis);
routes.get("/catalogo/tiaras", ProductsController.getTiaras);
routes.get("/catalogo/acessorios", ProductsController.getAcessorios);

routes.post("/pedido", OrdersController,postOrder);

routes.get("/frete", ShippingController.getShipping);

routes.post("/personalizado", PersonalizeController,postPersonalize);

module.exports = routes;
