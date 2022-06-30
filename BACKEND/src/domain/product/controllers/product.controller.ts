import { index } from "../models/index";
import { Request, Response } from "express";
import { sampleService } from "../services";

export const SampleController = {
 
  async getAll(req: Request, res: Response) {
    
    return res.status(200).json("Hello World");
    
  },
};
