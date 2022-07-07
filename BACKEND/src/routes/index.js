const express = require('express');
const OrdersController = require('../domain/order/controllers/order.controller');
const ProductsController = require('../domain/product/controllers/product.controller');
const PersonalizeController = require('../domain/personalize/controllers/personalize.controller');
const  postPersonalize  = require('../domain/personalize/services');
const psicologoValidation = require('../domain/personalize/validations/create')

const routes = express.Router();

routes.get("/catalogo", ProductsController.getAll);
//routes.get("/catalogo/:id", ProductsController.getProductById);

routes.get("/catalogo/destaques", ProductsController.getHighlights);
routes.get("/catalogo/lacos", ProductsController.getLacos);
routes.get("/catalogo/colecaoparis", ProductsController.getColecaoParis);
routes.get("/catalogo/tiaras", ProductsController.getTiaras);
routes.get("/catalogo/acessorios", ProductsController.getAcessorios);

routes.post("/pedido", OrdersController.postOrder);

// routes.get("/frete", ShippingController.getShipping);

routes.post("/personalizado", psicologoValidation,PersonalizeController.postPersonalize);

module.exports = routes;
