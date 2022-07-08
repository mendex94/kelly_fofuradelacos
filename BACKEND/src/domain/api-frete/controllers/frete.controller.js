const { Request, Response } = require("express");
const freteService = require("../services/index");

const FreteController = {

  async getFrete(req, res) {
    try {
      //const frete = await freteService.postPersonalize(req);      
      return res.status(200).json(15.5);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
}

module.exports = FreteController;
