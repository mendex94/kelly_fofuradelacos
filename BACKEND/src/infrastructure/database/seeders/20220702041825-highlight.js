'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 1,
          id_product: 1,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 2,
          id_product: 2,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 3,
          id_product: 3,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 4,
          id_product: 4,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 5,
          id_product: 5,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
 
  await queryInterface.bulkDelete('highlights', null, {});
    
  }
};
