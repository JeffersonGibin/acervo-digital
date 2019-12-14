const express = require('express')
const bodyParser  = require('body-parser')
const dotenv = require('dotenv')
const app = express()
const bindParam = require('./middlewares/bindParam')
const cors = require('cors')

/**
 * Inicia as configurações do DOTENV
 */
dotenv.config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Middlewares
 */
app.use(bindParam)

/**
 * Boa prática para invasores não identificar aplicações executando o Express 
*/
app.disable('x-powered-by');

/**
 * Rota
 * Importa todas as rotas.
*/
require('./routes/index.js')(app)

/**
 * Tratamento para rotas que não existem.
 */
app.use(function(req, res, next) {
    res.status(404).send({
        status: false,
        msg: "A rota não existe!"
    })
    next();
});

module.exports = app