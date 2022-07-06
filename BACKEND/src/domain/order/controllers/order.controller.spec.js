const app = require ('../../..');
const supertest = require ("supertest");

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/pedido')
            .send({
              name: "jose",
              phone: "111",
              email: "ta@gmail.com",
              total_order: 2,
              discount: 0.5,
              products_quantity: 3,
              shipping_total: 10,
              id_product: 1,
              amount: 10,
              unit_value: 15,
              percentage_discount: 0.15,
              id_product_size: "xx",
              id_product_color: "azul",
              id_product_material: "ecido"
            })
    
            expect(response.status).toBe(201)  
        })
    })
})