import { Product_Colors } from '../models/product_color';
import { Colors } from '../models/color';

import { Materials } from '../models/material';
import { Products } from "../models/product";
import { Sizes } from '../models/size';

export class ProductService {

  async findProductsByType(data: any) {
    const { type } = data.body;
    const { page = 1 } = data.body;
    const limit = 4;
    const offset = limit * (parseInt(page) - 1);

    let filter = {};

    if (type) {
      Object.assign(filter, {
        where: {
          type: type,
        },
        limit,
        offset,
      });
    }

    const product = await Products.findAll({
      include: Product_Colors
    })

    return product;
  }

}
