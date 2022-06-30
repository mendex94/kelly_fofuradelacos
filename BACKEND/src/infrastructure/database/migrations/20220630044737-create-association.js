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
  },

  async down (queryInterface, Sequelize) {

  }
};
