const {DB, getMarkerQuery, getValues} = require('../db')
const { LIMITE_POR_PAGINA, PAGINA_INICIAL } = require('../constants/constant')

module.exports = {
  create: (data) =>{
    const queryMarker = getMarkerQuery(data)
    const query = {
      text: 'INSERT usuario (nome, email, senha) VALUES('+queryMarker+')',
      values: getValues(data)
    }

    console.log("TESTE ", query)
  },

  read: async (pagina, limite) => {

    const query = {
      text: 'SELECT id, nome, email, senha  FROM usuario LIMIT $1 OFFSET $2',
      values: [limite, pagina],
    }

    const responseDB = await DB.query(query)
    return responseDB.rows
  }
  
}