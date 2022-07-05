"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          description: "Laço Preto",
          model: "",
          type: "laço",
          price: 39.90,
          weight: "",
          notes: "",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 2,
          description: "Laço Princesa da Disney",
          model: "Princesa",
          type: "laço",
          price: 5.5,
          weight: 1.1,
          notes: "Laço com presilha reforçada",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 3,
          description: "Laço Borboleta Azul",
          model: "Borboleta",
          type: "laço",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 4,
          description: "Tiara Queen of England",
          model: "Queen",
          type: "tiara",
          price: 5.5,
          weight: 2.1,
          notes: "Banhada a ouro com perolas da Macedonia",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 5,
          description: "Tiara Baby Shark",
          model: "Baby",
          type: "tiara",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 6,
          description: "Acessório para cabelo",
          model: "Presilha",
          type: "acessorio",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 7,
          description: "Tiara Borboleta Mágica",
          model: "Borboleta",
          type: "tiara",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 8,
          description: "Laço Doce Anelyse",
          model: "Anelyse",
          type: "laço",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 9,
          description: "Acessório Meninas Super Poderosas",
          model: "Retangular",
          type: "acessorio",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 10,
          description: "Tiara Blue",
          model: "Mulher Poderosa",
          type: "tiara",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 11,
          description: "Tiara Encanto de Menina",
          model: "Encanto",
          type: "tiara",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 12,
          description: "Laço Mãe e Filha",
          model: "Mãe e Filha",
          type: "laço",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 13,
          description: "Boina Inverno Encantado",
          model: "Inverno",
          type: "boina",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 14,
          description: "Boina de Lã",
          model: "Lã",
          type: "boina",
          price: 5.5,
          weight: 0.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 15,
          description: "Boina Paris é Top",
          model: "Parisiense",
          type: "boina",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 16,
          description: "Boina Copa do Mundo Fifa",
          model: "Copa do Mundo",
          type: "boina",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 17,
          description: "Tiara Anjo Dourado",
          model: "Perola",
          type: "tiara",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 18,
          description: "Prendedor de Cabelo",
          model: "Azul",
          type: "acessorio",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 19,
          description: "Laço Novembro Rosa",
          model: "Novembro Rosa",
          type: "laço",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 20,
          description: "Acessório para cabelo liso",
          model: "Presilha",
          type: "acessorio",
          price: 5.5,
          weight: 1.2,
          notes: "Feito a mão para você",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
