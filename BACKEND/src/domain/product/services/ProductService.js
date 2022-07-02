const Colors = require("../models/color");
const Materials = require("../models/material");
const Products = require("../models/product");
const Product_Albums = require("../models/product_album");
const Sizes = require("../models/size");
const Highlights = require("../models/highlight");

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
            required: true,
            through: { attributes: [] },
          },
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
    } catch (error) {}
  },
};

module.exports = ProductService;
