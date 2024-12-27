require('dotenv').config()

const db = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: 3000,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
    },
  })

module.exports = db