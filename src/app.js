const express = require('express')
const bodyParser  = require('body-parser')
const dotenv = require('dotenv')
const app = express()
const bindParam = require('./middlewares/bindParam')

dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bindParam)

require('./routes/index.js')(app)

module.exports = app