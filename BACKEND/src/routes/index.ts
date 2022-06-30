import express from "express";
import { ProductsController } from '../domain/product/controllers/product.controller';

const routes = express.Router();

routes.get("/catalogo", ProductsController.getAll);
routes.get("/catalogo", ProductsController.getOne);



module.exports = routes;
