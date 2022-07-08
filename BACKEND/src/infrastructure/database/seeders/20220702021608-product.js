"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          description: "Laço Preto",
          short_description: 
            "Laço em linho e pedraria, feito à mão, podendo sofrer pequenas variações.",
          model: "",
          type: "laço",
          price: 39.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
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
          description: "Laço Cetim Azul",
          short_description: 
            "Laço em cetim, feito à mão, podendo sofrer pequenas variações.",
          model: "",
          type: "laço",
          price: 50.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
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
          description: "Laço Coral",
          short_description: 
            "Laço em tule, feito à mão, podendo sofrer pequenas variações.",
          model: "",
          type: "laço",
          price: 50.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
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
          description: "Laço Veludo Vinho",
          short_description: 
            "Laço em veludo, feito à mão, podendo sofre pequenas variações.",
          model: "",
          type: "laço",
          price: 70.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
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
          description: "Laço Cetim Rosa",
          short_description: 
            "Laço em cetim, feito à mão, podendo sofrer pequenas variações.",
          model: "",
          type: "laço",
          price: 38.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
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
          description: "Laço Xadrez",
          short_description: 
            "Laço em linho, feito à mão, podendo sofrer pequenas variações.",
          model: "",
          type: "laço",
          price: 38.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
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
          description: "Laço de Veludo Preto",
          short_description: 
            "Laço em veludo, feito à mão, podendo sofrer pequenas variações.",
          model: "",
          type: "laço",
          price: 38.0,
          weight: null,
          notes:
            "O Laço é fabricado em fita de veludo preto com pernas longas medindo 11cm. O laço combina com looks sociais, românticos e despojados e demais ocasiões. Possui aproximadamente 11cm de largura, e 17cm de altura. Seu modelo romântico, fazem todos se apaixonar!",
          overall_evaluation: 4,
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
          description: "Laço Preto em Cadarço",
          short_description: 
            "Laço em cadarço, feito à mão, podendo sofrer pequenas variações.",
          model: "",
          type: "laço",
          price: 25.0,
          weight: null,
          notes:
            "Este laço é fabricado em fita de cadarço duplo com perna bem comprida. O Cadarço é o produto que nunca sai da moda, a tendência pode ser usado em qualquer estação. O Laço é um produto 100% artesanal, feito à mão com todo o carinho. O Laço possui acabamento em bico de pato, fácil de usar podendo ser usado em diferentes texturas de cabelo, pois prende facilmente. Possui aproximadamente 12cm de perna.",
          overall_evaluation: 4,
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
          description: "Tiara Princesa Akosua",
          short_description: 
            "Tiara em malha canelada, feita à mão, podendo sofrer pequenas variações.",
          model: "Princesa Akosua",
          type: "tiara",
          price: 100.0,
          weight: null,
          notes:
            "A tiara turbante voltou para ficar e transforma qualquer look de uma forma simples e prática, podendo ser uma grande aliada de vários penteados. Esta tiara ilumina qualquer look com charme e estilo!",
          overall_evaluation: 4,
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
          description: "Tiara Princesa Charlotte",
          short_description: 
            "Tiara em plástico e pedraria, feita à mão, podendo sofrer pequenas variações.",
          model: "Princesa Charlotte",
          type: "tiara",
          price: 100.0,
          weight: null,
          notes: "Tiara de decoração de strass",
          overall_evaluation: 4,
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
          description: "Tiara Princesa Mako",
          short_description:
            "Tiara em veludo, feita à mão, podendo sofrer pequenas variações.",
          model: "Princesa Mako",
          type: "tiara",
          price: 80.0,
          weight: null,
          notes:
            "Tiara trançada em veludo azul petróleo com acabamento interno impecável. Um acessório digno de uma princesa!",
          overall_evaluation: 4,
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
          description: "Tiara Princesa Grace Kelly",
          short_description: 
            "Tiara dourada em metal com pérolas, feita à mão, podendo sofrer pequenas variações.",
          model: "Princesa Grace Kelly",
          type: "tiara",
          price: 100.0,
          weight: null,
          notes: "Tiara de decoração de pérolas artificiais",
          overall_evaluation: 4,
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
          description: "Tiara Princesa Angela",
          short_description: 
            "Tiara com miçangas, feita à mão, podendo sofrer pequenas alterações.",
          model: "Princesa Angela",
          type: "tiara",
          price: 100.0,
          weight: null,
          notes:
            "Um acessório despojado e confortável, um acessório que pode ser usado em qualquer ocasião que te deixando ainda mais moderna.",
          overall_evaluation: 4,
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
          description: "Tiara Princesa Diana",
          short_description: 
            "Tiara preta de strass, feita à mão, podendo sofrer pequenas alterações.",
          model: "Princesa Diana",
          type: "tiara",
          price: 70.0,
          weight: null,
          notes:
            "Tem acessório para cabelo mais prático do que as tiaras? Além dessa praticidade, elas já mudam completamente o seu penteado de todos os dias e chamam a atenção para o seu look. ",
          overall_evaluation: 4,
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
          description: "Tiara Princesa Leonor",
          short_description: 
            "Tiara preta e dourada em lurex, feita à mão, podendo sofrer pequenas alterações.",
          model: "Princesa Leonor",
          type: "tiara",
          price: 70.0,
          weight: null,
          notes:
            "Esta tiara oferece o brilho que traz consigo! Neutra e chique, ela é capaz de transformar aquele look noite em uma variação mais night e baladex.",
          overall_evaluation: 4,
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
          description: "Tiara Princesa Isabel",
          short_description: 
            "Tiara em malha acetinada, feita à mão, podendo sofrer pequenas alterações.",
          model: "Princesa Isabel",
          type: "tiara",
          price: 65.0,
          weight: null,
          notes:
            "Perfeita para transformar looks e penteados com charme, praticidade & conforto.",
          overall_evaluation: 4,
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
          description: "Boina Preta",
          short_description: 
            "Boina em poliéster, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos, a boina lisa básica preta é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
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
          description: "Boina Branca",
          short_description: 
            "Boina em algodão, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios de algodão, a boina lisa básica branca é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
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
          description: "Boina Vermelha",
          short_description: 
            "Boina em poliéster, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos, a boina lisa básica vermelha é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
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
          description: "Boina Preta com Laço de Veludo",
          short_description: 
            "Boina em poliéster e veludo, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "boina",
          price: 85.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos com fita de veludo, a boina preta com laço de veludo é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
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
          id: 21,
          description: "Boina Preta com Pérolas",
          short_description: 
            "Boina em poliéster com pérolas, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "boina",
          price: 85.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos com pérolas, a boina preta com pérolas é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
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
          id: 22,
          description: "Boina Azul",
          short_description: 
            "Boina em poliéster e veludo, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos, a boina lisa básica azul é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
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
          id: 23,
          description: "Boina Bege",
          short_description: 
            "Boina em algodão, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios de algodão tricotado, esta boina é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
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
          id: 24,
          description: "Boina Roxa",
          short_description: 
            "Boina em algodão, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios de algodão tricotado, esta boina é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
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
          id: 25,
          description: "Presilha Gama",
          short_description: 
            "Presilha em resina e metal.",
          model: "",
          type: "acessórios",
          price: 25.0,
          weight: null,
          notes:
            "Presilha de cabelo fabricada à mão com base de metal e pedra de resina fabricada no Brasil.",
          overall_evaluation: 4,
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
          id: 26,
          description: "Presilha de Strass Prata Vazada",
          short_description: 
            "Presilha em strass e metal.",
          model: "",
          type: "acessórios",
          price: 28.0,
          weight: null,
          notes:
            "Presilha de cabelo com pedrinhas de strass pra você brilhar o ano inteiro!",
          overall_evaluation: 4,
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
          id: 27,
          description: "Presilha de Strass Prata",
          short_description: 
            "Presilha em strass e metal.",
          model: "",
          type: "acessórios",
          price: 28.0,
          weight: null,
          notes:
            "Presilha de cabelo com pedrinhas de strass pra você brilhar o ano inteiro!",
          overall_evaluation: 4,
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
          id: 28,
          description: "Piranha Espinha Rosa",
          short_description: 
            "Piranha de PVC, do tipo espinha.",
          model: "",
          type: "acessórios",
          price: 15.0,
          weight: null,
          notes: "Piranha Espinha Rosa",
          overall_evaluation: 4,
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
          id: 29,
          description: "Piranha Floral Roxa",
          short_description: 
            "Piranha de PVC, do tipo espinha.",
          model: "",
          type: "acessórios",
          price: 15.0,
          weight: null,
          notes: "Piranha Floral Roxa",
          overall_evaluation: 4,
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
          id: 30,
          description: "Xuxinha Vermelha",
          short_description: 
            "Xuxinha em linho de poliéster, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "acessórios",
          price: 10.0,
          weight: null,
          notes:
            "Essa xuxinha acende qualquer penteado em seu vermelho aberto cheio de atitude!",
          overall_evaluation: 4,
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
          id: 31,
          description: "Xuxinha Vinho com Pérolas",
          short_description: 
            "Xuxinha em veludo com pérolas, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "acessórios",
          price: 20.0,
          weight: null,
          notes:
            "No veludo com aplicações de pérolas, esta xuxinha não sai do seu cabelo ou pulso e te acompanha em qualquer ocasião deixando o look chic  cool.",
          overall_evaluation: 4,
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
          id: 32,
          description: "Xuxinha preta",
          short_description: 
            "Xuxinha em veludo e tule, feita à mão, podendo sofrer pequenas alterações.",
          model: "",
          type: "acessórios",
          price: 20.0,
          weight: null,
          notes:
            "Xuxinha com laço removível na cor preta, uma peça chic para você se divertir em diferentes ocasiões e segurar as madeixas com conforto e estilo!",
          overall_evaluation: 4,
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
