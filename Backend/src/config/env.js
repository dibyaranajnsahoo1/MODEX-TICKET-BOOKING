require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  DB: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  REDIS: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
};