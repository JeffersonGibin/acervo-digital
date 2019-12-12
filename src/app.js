const express = require('express')
const bodyParser  = require('body-parser')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes/index.js')(app)

module.exports = app