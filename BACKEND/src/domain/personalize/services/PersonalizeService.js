const Personalized_Orders = require('../models/personalized_order');

const PersonalizedService = {
  async postPersonalize() {
      try {
        const postPersonalize = await Personalized_Orders.create();
  
        return postPersonalize;
      } catch (error) {
        console.log(error);
      }
    },
}
module.exports = PersonalizedService;