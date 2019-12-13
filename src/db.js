
const { Client } = require('pg')

const DB = new Client({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

/**
 * Cria marcadores com os valores de um objeto
*/
function getMarkerQuery(data) {
  let newValues = []
  Object.keys(data).map((key, index) => newValues.push('$'+(index+1)))
  return newValues.join(",")
}

/**
 * Retorna os valores de um objeto em um array
 */
function getValues(data) {
  let newValues = []
  Object.keys(data).map((key) => newValues.push(data[key]))

  return newValues
}

/**
 * Retorna as chaves de um objeto em uma string
 */
function getKeys(data){
  let newValues = []
  Object.keys(data).map((key) => newValues.push(key))

  return newValues.join(",")
}

/**
 * Conecta no banco de dados
*/
DB.connect()

module.exports = {
  DB,
  getMarkerQuery,
  getValues,
  getKeys
} 