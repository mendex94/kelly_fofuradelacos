const Orders = require('./order')
const Order_Details = require('./order_detail')
const Customer = require('./customer')


Orders.belongsToMany(Order_Details, {
    foreignKey: "id_product",
});

Order_Details.belongsToMany(Orders, {
    foreignKey: "id_product",
});
Customer.hasMany(Order, {
    foreignKey: "id_customer",
});
Orders.belongsTo(Customer, {
    foreignKey: "id_order",
});