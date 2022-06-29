'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_materials', {
     
      id_product_material: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_product: {
        type: Sequelize.INTEGER,
        reference: { 
          model: {
            tableName: products,
          },
          foreignKey:id_product
        }
      },
      id_material: {
        type: Sequelize.INTEGER,
        reference: { 
          model: {
            tableName: materials,
          },
          foreignKey:id_material
        }
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
    await queryInterface.dropTable('product_materials');
  }
};