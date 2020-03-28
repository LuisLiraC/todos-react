import express from 'express'
import webpack from 'webpack'
import helmet from 'helmet'
import config from './config'
import { renderApp } from './routes/ssr'
import getManifest from './getManifest'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import users from './routes/users'

const app = express()
app.use(cookieParser())
app.use(express.json())

if (config.env === 'development') {
  console.log('\x1b[36m%s\x1b[0m', `[config] ${config.env}`)
  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = { port: config.port, hot: true }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
  app.use(morgan('dev'))
} else {
  console.log('\x1b[36m%s\x1b[0m', `[config] ${config.env}`)

  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest()
    next()
  })
  app.use(express.static(`${__dirname}/public`))
  app.use(helmet())
  app.use(helmet.permittedCrossDomainPolicies())
  app.disable('x-powered-by')
}

users(app)
app.get('*', renderApp)

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
})