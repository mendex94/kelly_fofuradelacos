const { Orders } = require("../models");

const ProductService = {
    async allProducts() {
      try {
        const fullProducts = await Products.findAll();
  
        return fullProducts;
      } catch (error) {
        console.log(error);
      }
    },
}
module.exports = OrderService;