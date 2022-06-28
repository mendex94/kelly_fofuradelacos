'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
    
      id_product: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      in_product_material: {
        type: Sequelize.INTEGER
      },
      id_product_size: {
        type: Sequelize.INTEGER
      },
      id_product_size: {
        type: Sequelize.INTEGER
      },
      id_product_color: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.DECIMAL
      },
      notes: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};