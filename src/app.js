const express = require('express')
const bodyParser  = require('body-parser')
const dotenv = require('dotenv')
const app = express()
const bindParam = require('./middlewares/bindParam')

dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bindParam)

require('./routes/index.js')(app)

app.use(function(req, res, next) {
    res.status(404).send({
        status: false,
        msg: "A rota não existe!"
    })
    next();
});

module.exports = app