import { ModelSample } from "../models/modelsample";
import { Request, Response } from "express";
import { sampleService } from "../services";

export const SampleController = {
 
  async getHelloWorld(req: Request, res: Response) {
    
    return res.status(200).json("Hello World");
    
  },
};
