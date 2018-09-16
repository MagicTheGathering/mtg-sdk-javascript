import serveIndex from 'serve-index'
import express from 'express'
import logger from 'morgan'
import path from 'path'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import helmet from 'helmet'

module.exports = app => {
  const _env = app.get('environment')

  // view engine setup
  app.set('views', path.join(__dirname, '../Views'))
  app.set('view engine', 'pug')
  app.use(favicon(path.join(__dirname, '../favicon.ico')))
  app.set('json spaces', 4)
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  if (_env === 'production') {
    // Access-Control
    app.use(helmet())
    // Static Files
    app.use('/public', express.static(path.join(__dirname, '../public')))
  } else {
    // Hot Reload
    const config = require('../webpack.dev.config')
    const compiler = webpack(config)
    const dev_middleware = webpackDevMiddleware(compiler, {
      hot: true,
      filename: config.output.filename,
      publicPath: config.output.publicPath,
      stats: {
        colors: true
      },
      noInfo: true
    })
    const hot_middleware = webpackHotMiddleware(compiler, {
      log: console.log,
      heartbeat: 10 * 1000
    })
    app.use(dev_middleware)
    app.use(hot_middleware)
    app.use(function (req, res, next) {
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', __dirname)
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true)
      next()
    })
  }
}
