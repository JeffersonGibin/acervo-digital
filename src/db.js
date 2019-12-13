
const { Client } = require('pg')

const DB = new Client({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

function getMarkerQuery(data) {
  let newValues = []
  console.log(data)
  return Object.keys(data).map((key, index) => newValues.push('$'+(index+1)))
}

function getValues(data) {
  let newValues = []
  Object.keys(data).map((key) => newValues.push(data[key]))

  return newValues
}


DB.connect()

module.exports = {
  DB,
  getMarkerQuery,
  getValues
} 