"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 1,
          name: "Azul",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 2,
          name: "Amarelo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 3,
          name: "Rosa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 4,
          name: "Preto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 5,
          name: "Vermelho",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 6,
          name: "Verde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('colors', null, {});
     
  },
};
