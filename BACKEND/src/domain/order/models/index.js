const Orders = require('./order')
const Order_Details = require('./order_detail')
const Customer = require('./customer')


Orders.hasMany(Order_Details, {
    foreignKey: "id_product",
});
Order_Details.belongsTo(Orders, {
    foreignKey: "id_product",
});
Customer.hasMany(Orders, {
    foreignKey: "id_customer",
});
Orders.belongsTo(Customer, {
    foreignKey: "id_order",
});