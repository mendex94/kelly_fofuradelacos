'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_materials",
      [
        {
          id: 1,
          id_product: 1,
          id_material:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_materials",
      [
        {
          id: 2,
          id_product: 1,
          id_material:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_materials",
      [
        {
          id: 3,
          id_product: 1,
          id_material:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_materials",
      [
        {
          id: 4,
          id_product: 1,
          id_material:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_materials",
      [
        {
          id: 5,
          id_product: 2,
          id_material:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_materials",
      [
        {
          id: 6,
          id_product: 2,
          id_material:6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_materials",
      [
        {
          id: 7,
          id_product: 3,
          id_material:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_materials",
      [
        {
          id: 8,
          id_product: 3,
          id_material:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.bulkDelete('product_materials', null, {});
    
  }
};
