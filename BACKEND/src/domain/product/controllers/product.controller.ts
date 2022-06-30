import { Products } from "../models/product";

import { Request, Response} from "express";

export const ProductsController = {

    async getAll(req: Request, res: Response) {
      try {
        const products = await Products.findAll();
  
        return res.json(products);
      } catch (error) {
        console.log(error);
        return res.status(500).json("Erro");
      }
    },
  
    async getOne(req: Request, res: Response) {
      try {
        const { id_product } = req.params;
        const product = await Products.findByPk(id_product);
  
        return res.json(product);
      } catch (error) {
        return res.status(500).json("Erro");
      }
    },
  };