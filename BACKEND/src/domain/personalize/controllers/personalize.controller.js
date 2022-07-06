const { Request, Response } = require("express");
const personalizedService = require("../services/index");

const PersonalizeController = {

  async postPersonalize(req, res) {
    try {
      const orders = await personalizedService.create();
      return res.status(200).json(await orders);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
}

module.exports = PersonalizeController;
