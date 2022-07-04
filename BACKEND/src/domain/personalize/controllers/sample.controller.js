const { ModelSample } = require ("../models/modelsample");
const { Request, Response } = require ("express");
const { sampleService } = require ("../services");

export const SampleController = {
 
  async getHelloWorld(req, res) {
    
    return res.status(200).json("Hello World");
    
  },
};
