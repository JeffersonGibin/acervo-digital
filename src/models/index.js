/**
 * Models main
*/

const categoria = require('./categoria-controller')
const genero = require('./genero-controller')
const midia = require('./midia-controller')
const usuario = require('./usuario-controller')

module.exports = { categoria, genero, midia, usuario }