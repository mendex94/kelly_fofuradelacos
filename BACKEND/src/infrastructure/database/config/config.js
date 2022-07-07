require('dotenv').config()

module.exports = {
  "development": {
    "username": "wb1lxjbrq22dkla6",//process.env.DB_USER,
    "password": "ub3i9viylivhwaj8",//process.env.DB_PASSWORD,
    "database": "l4ahhohue53xr2ct",//process.env.DB_NAME_DEV,
    "host": "y5svr1t2r5xudqeq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",//process.env.DB_HOST,
    "dialect": "mysql" //process.env.DB_DIALECT
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME_DEV,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": "root",
    "password": "mysql",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
