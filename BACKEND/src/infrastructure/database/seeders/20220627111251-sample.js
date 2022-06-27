"use strict";

const { faker } = require("@faker-js/faker");

const sample = faker.name.findName();


let other_sample = [];

for (let i = 0; i < 10; i++) {
  other_sample.push({
    sample: faker.name.findName(),
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("", [
      other_sample
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
