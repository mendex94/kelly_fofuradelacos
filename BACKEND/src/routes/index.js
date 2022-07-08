const express = require('express');
const OrdersController = require('../domain/order/controllers/order.controller');
const ProductsController = require('../domain/product/controllers/product.controller');
const PersonalizeController = require('../domain/personalize/controllers/personalize.controller');
const  postPersonalize  = require('../domain/personalize/services');
const personalizeValidation = require('../domain/personalize/validations/create')
const OrderValidation = require("../domain/order/validations/order/create");
const ProductValidation = require("../domain/product/validations/getone");
const FreteController = require('../domain/shipping-calculator/controllers/frete.controller');

const routes = express.Router();

routes.get("/catalogo", ProductsController.getAll);
routes.get("/catalogo/produto/:id", ProductValidation.getOne,ProductsController.getProductById);

routes.get("/catalogo/destaques", ProductsController.getHighlights);
routes.get("/catalogo/lacos", ProductsController.getLacos);
routes.get("/catalogo/colecaoparis", ProductsController.getColecaoParis);
routes.get("/catalogo/tiaras", ProductsController.getTiaras);
routes.get("/catalogo/acessorios", ProductsController.getAcessorios);

//routes.post("/pedido", OrderValidation.create, OrdersController.postOrder);
routes.post("/pedido", OrdersController.postOrder);
routes.post("/frete", FreteController.getFrete);


routes.post("/personalizado", personalizeValidation,PersonalizeController.postPersonalize);


module.exports = routes;
