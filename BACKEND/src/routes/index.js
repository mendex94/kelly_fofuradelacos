const express = require('express');
const OrdersController = require('../domain/order/controllers/order.controller');
const ProductsController = require('../domain/product/controllers/product.controller');
// const PersonalizeController = require('../domain/personalize/controllers/personalize.controller');
// const { PersonalizeValidation } = require ("../domain/personalize/validations/index");
const OrderValidation = require("../domain/order/validations/order/create");

const routes = express.Router();

routes.get("/catalogo", ProductsController.getAll);
//routes.get("/catalogo/:id", ProductsController.getProductById);

routes.get("/catalogo/destaques", ProductsController.getHighlights);
routes.get("/catalogo/lacos", ProductsController.getLacos);
routes.get("/catalogo/colecaoparis", ProductsController.getColecaoParis);
routes.get("/catalogo/tiaras", ProductsController.getTiaras);
routes.get("/catalogo/acessorios", ProductsController.getAcessorios);

routes.post("/pedido", OrderValidation.create, OrdersController.postOrder);

// routes.get("/frete", ShippingController.getShipping);

// routes.post("/personalizado", PersonalizeValitation.create, PersonalizeController.postPersonalize);

module.exports = routes;
