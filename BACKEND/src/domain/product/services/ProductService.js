const { Materials } = require("../models/material");
const { Products } = require("../models/product");
const {Highlights} = require("../models/highlight");

const ProductService = {

  async allProducts() {
    try {
      const fullProducts = await Products.findAll({
        include: [
          {
            model: Materials,
            as: "materials",
            through: { attributes: [] },
          },
        ],
      });

      return fullProducts;
    } catch (error) {
      console.log(error);
    }
  },

  async findHighlights(){
    try{
      const dataHighlights = await Products.findAll({
        include: [
          {
            model: Highlights,
            as: "Highlights",
            required: true,
            through: 
            { attributes: [] },
          },
        ],
      })
    }catch(error){

    }
  }
};

module.exports = ProductService;
