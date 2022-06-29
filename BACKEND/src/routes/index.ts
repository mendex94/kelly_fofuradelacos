import express from "express";
// import { SampleValidation } from '../domain/example/validations'
// import { SampleController } from '../domain/example/controllers/sample.controller';

const routes = express.Router();

routes.get("catalogo/tiara", TiaraController.getOne);
routes.get("catalogo/tiara", TiaraController.getAll);

module.exports = routes;
