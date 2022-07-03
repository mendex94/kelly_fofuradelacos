'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_sizes",
      [
        {
          id: 1,
          id_product: 1,
          id_size:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_sizes",
      [
        {
          id: 2,
          id_product: 1,
          id_size:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_sizes",
      [
        {
          id: 3,
          id_product: 1,
          id_size:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_sizes",
      [
        {
          id: 4,
          id_product: 1,
          id_size:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_sizes",
      [
        {
          id: 5,
          id_product: 2,
          id_size:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_sizes",
      [
        {
          id: 6,
          id_product: 2,
          id_size:6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_sizes",
      [
        {
          id: 7,
          id_product: 3,
          id_size:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_sizes",
      [
        {
          id: 8,
          id_product: 3,
          id_size:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('product_sizes', null, {});
  
  }
};
