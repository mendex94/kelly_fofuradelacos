'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_colors",
      [
        {
          id: 1,
          id_product: 1,
          id_color:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_colors",
      [
        {
          id: 2,
          id_product: 1,
          id_color:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_colors",
      [
        {
          id: 100,
          id_product: 1,
          id_color:6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_colors",
      [
        {
          id: 3,
          id_product: 1,
          id_color:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_colors",
      [
        {
          id: 4,
          id_product: 1,
          id_color:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_colors",
      [
        {
          id: 5,
          id_product: 2,
          id_color:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_colors",
      [
        {
          id: 6,
          id_product: 2,
          id_color:6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_colors",
      [
        {
          id: 7,
          id_product: 3,
          id_color:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_colors",
      [
        {
          id: 8,
          id_product: 3,
          id_color:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('product_colors', null, {});
    
  }
};
