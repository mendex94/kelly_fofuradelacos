const app = require ('../../..');
const supertest = require ("supertest");

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/frete')
            .send({
                cdServico: "04014",
                cepOrigem: 14061310,
                cep: 01001001,
                pesoProduto: 1,
                formatoProduto: 1,
                comprimentoProduto: 15,
                alturaProduto: 10,
                larguraProduto: 15,
                diametroproduto: 10
            })
    
            expect(response.status).toBe(201)  
        })
    })
})