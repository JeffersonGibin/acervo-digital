
const { Client } = require('pg')


module.exports = async () => {
  const DB = new Client({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });

  DB.connect()
  
  return DB
}