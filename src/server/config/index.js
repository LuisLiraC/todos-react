const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  port: process.env.port,
  env: process.env.ENV,
  apiUrl: process.env.API_URL,
  authSecret: process.env.AUTH_SECRET
}