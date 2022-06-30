import express from 'express';
import handleMiddleware from './middlewares/handleMiddleware';
const db = require ('./infrastructure/database')
const cors = require('cors')

const app = express();
const routes = require("./routes");

app.use (cors())

db.hasConnection()

app.use(express.json());
app.use(routes);
app.use(handleMiddleware);

export default app;