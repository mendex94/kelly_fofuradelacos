import { ProductsController } from './../domain/product/controllers/product.controller';
import express from "express";
import { ProductsController } from '../domain/product/controllers/product.controller';


const routes = express.Router();

routes.get("/catalogo", ProductsController.getProductsByType);

export = routes;
