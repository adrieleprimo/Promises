require('dotenv').config();
const knex  = require('knex')({
  client: 'mysql2',
  connection:{
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
  }
  });
module.exports = knex;
