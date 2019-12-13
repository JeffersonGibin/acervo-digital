const md5 = require('md5')
const { Usuario } = require('../models')
const { LIMITE_POR_PAGINA, PAGINA_INICIAL } = require('../constants/constant')

module.exports = {
  getAll: (req, res) => {

    let limite = req.parametro.limite || LIMITE_POR_PAGINA
		let pagina = req.parametro.pagina || PAGINA_INICIAL
    pagina = pagina == 1 ? PAGINA_INICIAL : pagina
    
    return Usuario.read(pagina, limite)
  },

  save: (parametro) => {
    return Usuario.create(parametro)
  }
}