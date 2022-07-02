"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 1,
          id_product: 1,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Danilo Sales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 2,
          id_product: 2,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Danilo Sales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 3,
          id_product: 3,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Danilo Sales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 4,
          id_product: 4,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Danilo Sales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('ratings', null, {});
    
  },
};
