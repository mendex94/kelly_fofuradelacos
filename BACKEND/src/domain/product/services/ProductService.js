const { Colors, Materials, Products, Product_Albums, Sizes, Highlights, Product_Materials, Product_Sizes, Product_Colors } = require("../models");


const ProductService = {

  async allProducts() {
    try {
      const fullProducts = await Products.findAll();

      return fullProducts;

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
    } catch (error) { }
  },

  async findProductbyType(type) {
    try {
      const product = await Products.findAll(
        {
          where: { type: type },
          include: [
            {
              model: Product_Albums,
              attributes: ['id, id_product, url_image'],
              required: true,
            },

        {
          model: Colors,
          include: [{
              model: Product_Colors,
              attributes: ['id_color'],
              required: true,
            }],
            attributes: ['id'],
            required: true,

        },
        {
          model: Sizes,
          include: [{
              model: Product_Sizes,
              attributes: ['id_size'],
              required: true,
            }],
            attributes: ['id'],            required: true,
            required: true,

},
        {
          model: Materials,
              include: [{
                model: Product_Materials,
                attributes: ['id_material'],
                required: true,
              }],
                attributes: ['id'],
                required: true,
                required: true,

              },
    ]
  })
      return product;
    } catch (error) {
    }
  },

};

module.exports = ProductService;
