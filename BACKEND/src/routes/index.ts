import { ProductsController } from './../domain/product/controllers/product.controller';
import express from "express";
// import { SampleValidation } from '../domain/example/validations'
// import { SampleController } from '../domain/example/controllers/sample.controller';

const routes = express.Router();

routes.get("/catalogo", ProductsController.getProductsByType);

export = routes;
