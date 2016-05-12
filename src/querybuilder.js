const rp = require('request-promise')
const config = require('./config.js')

module.exports = type => ({

  /** Get a resource by its id. */
  find: id => rp(`${config.endpoint}/${type}/${id}`)

})
