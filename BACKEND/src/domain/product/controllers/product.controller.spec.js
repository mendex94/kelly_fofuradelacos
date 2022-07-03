import app from "../../..";
import supertest from 'supertest';




describe('No controller ao executar a funcao', () => {

  describe('getAll', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/catalogo')       

      expect(response.status).toBe(200)
    })
    
  })

  describe('getHighlights', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/catalogo/destaques')       

      expect(response.status).toBe(200)
    })
    
  })
  describe('getLacos', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/catalogo/lacos')       

      expect(response.status).toBe(200)
    })
    
  })

});