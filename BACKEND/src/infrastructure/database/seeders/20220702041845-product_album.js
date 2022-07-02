'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_albums",
      [
        {
          id: 1,
          id_product: 1,
          url_image: "https://res-console.cloudinary.com/drderxybw/thumbnails/v1/image/upload/v1656164767/c2FtcGxlcy9hbmltYWxzL2NhdA==/template/d18xMDAwLGFyXzE6MSxjX2ZpbGwsZ19hdXRvLGVfYXJ0Omhva3VzYWk=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_albums",
      [
        {
          id: 2,
          id_product: 2,
          url_image: "https://res-console.cloudinary.com/drderxybw/thumbnails/v1/image/upload/v1656164767/c2FtcGxlcy9hbmltYWxzL2NhdA==/template/d18xMDAwLGFyXzE6MSxjX2ZpbGwsZ19hdXRvLGVfYXJ0Omhva3VzYWk=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_albums",
      [
        {
          id: 3,
          id_product: 3,
          url_image: "https://res-console.cloudinary.com/drderxybw/thumbnails/v1/image/upload/v1656164767/c2FtcGxlcy9hbmltYWxzL2NhdA==/template/d18xMDAwLGFyXzE6MSxjX2ZpbGwsZ19hdXRvLGVfYXJ0Omhva3VzYWk=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_albums",
      [
        {
          id: 4,
          id_product: 4,
          url_image: "https://res-console.cloudinary.com/drderxybw/thumbnails/v1/image/upload/v1656164767/c2FtcGxlcy9hbmltYWxzL2NhdA==/template/d18xMDAwLGFyXzE6MSxjX2ZpbGwsZ19hdXRvLGVfYXJ0Omhva3VzYWk=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_albums",
      [
        {
          id: 5,
          id_product: 5,
          url_image: "https://res-console.cloudinary.com/drderxybw/thumbnails/v1/image/upload/v1656164767/c2FtcGxlcy9hbmltYWxzL2NhdA==/template/d18xMDAwLGFyXzE6MSxjX2ZpbGwsZ19hdXRvLGVfYXJ0Omhva3VzYWk=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
  
   await queryInterface.bulkDelete('product_albums', null, {});
   
  }
};
