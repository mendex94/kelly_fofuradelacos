const { Materials } = require('../models/material')
const { Products } = require('../models/product')

const ProductService = {

      async allProducts() {
        try{
        const fullProducts = await Products.findAll({
          include: [
            {
              model: Materials,
              as: 'materials',
              through: { attributes: []},
            }
          ]
        });

        return fullProducts;
      }catch(error) {
    console.log(error)
      }
    },
    
          }

        
module.exports = ProductService


