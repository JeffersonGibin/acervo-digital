const DB = require('../db')

exports.list = function() {
  const response = DB.query('SELECT nome FROM usuario')
  return response
}