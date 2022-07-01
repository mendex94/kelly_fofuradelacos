import { Request, Response } from "express";
import { productService } from "../services";

export const ProductsController = {
 
  async getProductsByType(req: Request, res: Response) {     
    try{
      const products = await productService.findProductsByType(req)
      return res.status(200).json(await products);
    }catch(error){      
      console.log(error);
      res.status(500).json("Erro fatal!");
    }    
  },
};
