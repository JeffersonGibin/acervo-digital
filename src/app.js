const express = require('express')
const { Client } = require('pg')
const dotenv = require('dotenv').config()

const app = express()

const DB = new Client({
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  host: process.env.DB_HOST
});

app.use(function(){
  return DB
})

require('./routes/index.js')(app)

module.exports = app