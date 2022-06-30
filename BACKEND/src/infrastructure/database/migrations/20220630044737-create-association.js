'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('products', {
      fields: ['id_product_material'],
      type: 'foreign key',
      references: {
        table: 'product_materials',
        field: 'id_product_material'
      }
    })
    queryInterface.addConstraint('products', {
      fields: ['id_product_size'],
      type: 'foreign key',
      references: {
        table: 'product_sizes',
        field: 'id_product_size'
      }
    })
    queryInterface.addConstraint('products', {
      fields: ['id_product_color'],
      type: 'foreign key',
      references: {
        table: 'product_colors',
        field: 'id_product_color'
      }
    })
    queryInterface.addConstraint('products', {
      fields: ['id_product_collection'],
      type: 'foreign key',
      references: {
        table: 'product_collections',
        field: 'id_product_collection'
      }
    })
    queryInterface.addConstraint('products', {
      fields: ['id_highlight'],
      type: 'foreign key',
      references: {
        table: 'highlights',
        field: 'id_highlight'
      }
    })
    queryInterface.addConstraint('products', {
      fields: ['id_rating'],
      type: 'foreign key',
      references: {
        table: 'ratings',
        field: 'id_rating'
      }
    })

    queryInterface.addConstraint('order_details', {
      fields: ['id_order'],
      type: 'foreign key',
      references: {
        table: 'orders',
        field: 'id_order'
      }
    })
    queryInterface.addConstraint('order_details', {
      fields: ['id_product'],
      type: 'foreign key',
      references: {
        table: 'products',
        field: 'id_product'
      }
    })


  },

  async down (queryInterface, Sequelize) {

  }
};
