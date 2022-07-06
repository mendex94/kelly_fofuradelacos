require('dotenv').config()
const Sequelize = require("sequelize");

const DB_NAME = "zmucgf11ffxyf2nh";//process.env.DB_NAME_DEV;
const DB_USER ="v31kfqep3rqse5vd"; //process.env.DB_USER;
const DB_PASS = "lktb4ktol3ef3apb";//process.env.DB_PASSWORD;
const DB_CONFIG = {
  dialect: "mysql",
  host: "n4m3x5ti89xl6czh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
};

// objeto para guardar a conexão do banco dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar uma conexão com banco dados");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados");
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;
