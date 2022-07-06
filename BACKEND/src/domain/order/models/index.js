const Orders = require('./order')
const Order_Details = require('./order_detail')
const Customer = require('./customer')


Orders.hasMany(Order_Details, {
    foreignKey: "id_order",
});
Order_Details.belongsTo(Orders, {
    foreignKey: "id_order",
});
Customer.hasMany(Orders, {
    foreignKey: "id_customer",
});
Orders.belongsTo(Customer, {
    foreignKey: "id_order",
});

module.exports = {
    Orders,
    Order_Details,
    Customer
}
