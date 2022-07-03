const {Colors} = require("../models");
const {Materials} = require("../models");
const {Products} = require("../models");
const {Product_Albums} = require("../models");
const {Sizes} = require("../models");
const {Highlights} = require("../models");

const ProductService = {

  async allProducts() {
    try {
      const fullProducts = await Products.findAll();

      return fullProducts;

    } catch (error) {
      console.log(error);
    }
  },

  async findProductbyType(type) {
    try {
      const product = await Products.findAll({
        where: { type: type },
        include: [
          {
            model: Product_Albums,
            required: true,
          },
          {
            model: Colors,
            required: true,
          },
          {
            model: Sizes,
            required: true,
          },
          {
            model: Materials,
            required: true,
          },
        ],
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  },

  async findHighlights() {
    try {
      const dataHighlights = await Products.findAll({
        include: [
          {
            model: Highlights,
            as: "Highlights",
            required: true
          },
          {
            model: Product_Albums,
            as: "Album",
            required: true,
          },
          {
            model: Colors,
            required: true,
          },
          {
            model: Sizes,
            required: true,
          },
          {
            model: Materials,
            required: true,
          },
        ],
      });
      return dataHighlights
    } catch (error) {} 
  },
};

module.exports = ProductService;
