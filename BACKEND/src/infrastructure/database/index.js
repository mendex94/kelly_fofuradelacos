require('dotenv').config()
const Sequelize = require("sequelize");

const DB_NAME = "l4ahhohue53xr2ct";//process.env.DB_NAME_DEV;
const DB_USER ="wb1lxjbrq22dkla6"; //process.env.DB_USER;
const DB_PASS = "ub3i9viylivhwaj8";//process.env.DB_PASSWORD;
const DB_CONFIG = {
  dialect: "mysql",
  host: "y5svr1t2r5xudqeq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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
