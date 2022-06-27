import express from "express";
import { SampleValidation } from '../domain/example/validations'
import { SampleController } from '../domain/example/controllers/sample.controller';

const routes = express.Router();

routes.get(
    "/hello-world", 
    SampleController.getHelloWorld
);

module.exports = routes;
