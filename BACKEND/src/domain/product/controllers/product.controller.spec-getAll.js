import app from '../../..';
import supertest from "supertest";
import { hasUncaughtExceptionCaptureCallback } from 'process';

describe('No controller ao executar a funcao', () => {

  describe('getAll', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/hello-world')       

      expect(response.status).toBe(200)
    })
    
  })


});