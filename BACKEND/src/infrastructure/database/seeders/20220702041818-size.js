'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 1,
          name: "11x5cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 2,
          name: "15x17cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 3,
          name: "M",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 4,
          name: "G",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 5,
          name: "GG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 6,
          name: "XG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('sizes', null, {});
  
  }
};
