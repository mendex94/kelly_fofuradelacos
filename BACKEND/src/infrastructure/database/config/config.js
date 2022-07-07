require('dotenv').config()

module.exports = {
  "development": {
    "username": "v31kfqep3rqse5vd",//process.env.DB_USER,
    "password": "u7bpxkb99v8frq02",//process.env.DB_PASSWORD,
    "database": "zmucgf11ffxyf2nh",//process.env.DB_NAME_DEV,
    "host": "n4m3x5ti89xl6czh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",//process.env.DB_HOST,
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
