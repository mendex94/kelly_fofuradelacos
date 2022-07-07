const Personalized_Orders = require('../models/personalized_order');

const PersonalizedService = {
  async postPersonalize(data) {
      try {
        const postPersonalize = await Personalized_Orders.create(...data.body);  
        return postPersonalize;
      } catch (error) {
        console.log(error);
      }
    },
}
module.exports = PersonalizedService;