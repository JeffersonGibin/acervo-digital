const express = require('express')
const { Client } = require('pg')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

// const DB = new Client({
//   database: process.env.DB_NAME,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });

// DB.connect()

// app.get('/', async (req, res) => {
//   const ress = await DB.query('SELECT nome FROM usuario')

//   res.status(200).send({
//     application: process.env.APP_NAME,
//     version: process.env.APP_VERSION,
//     teste: ress.rows[0]
//   });
// });

require('./routes/index.js')(app)

module.exports = app 