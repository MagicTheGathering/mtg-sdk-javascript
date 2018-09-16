import express from 'express'
import consign from 'consign'
'use strict'
require('./node_modules/dotenv/lib/main').config()

const app = express()
var port = process.env.PORT || '8081'
var environment = process.env.ENV || 'development'
app.set('port', port)
app.set('environment', environment)

consign()
  .then('libs/middleware.js')
  .then('Routes')
  .then('libs/errorCatching.js')
  .then('libs/boot.js')
  .into(app)

module.exports = app
