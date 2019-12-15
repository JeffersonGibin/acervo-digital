/**
 * Controllers main
*/

const Categoria = require('./categoria-controller')
const Genero = require('./genero-controller')
const Midia = require('./midia-controller')
const Usuario = require('./usuario-controller')
const Upload = require('./upload-controller')

module.exports = { Categoria, Genero, Midia, Usuario, Upload }