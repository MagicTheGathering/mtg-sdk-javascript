const request = require('request-promise')
const config = require('./config.js')
const { curryN, merge, prop } = require('ramda')
const Emitter = require('emitter20')

const get = curryN(3, (type, page, args) => {
  return request({
    uri: `${config.endpoint}/${type}`,
    qs: merge(args, {
      page
    }),
    json: true
  }).then(prop(type))
})

module.exports = type => ({

  /** Gets a resource by its id. */
  find: id => request({
    uri: `${config.endpoint}/${type}/${id}`,
    json: true
  }),

  /** Gets a resource with a given query. */
  where: get(type, 0),

  /** Gets a resource with a given query (like where), but
      returns an emitter that emits 3 events:
      - data(card): emits a card when it is retrieved from the API
      - error(err): emits an error if the request fails
      - end(): called when all results have been retrieved
  */
  all: args => {
    const emitter = new Emitter()
    const getEmit = (type, page, args) => {
      return get(type, page, args)
      .then(items => {
        if (items.length > 0) {
          items.forEach(c => emitter.trigger('data', c))
          return getEmit(type, page + 1, args) // RECURSION
        } else {
          emitter.trigger('end')
        }
      })
      .catch(err => emitter.trigger('error', err))
    }
    getEmit(type, 1, args)

    return emitter
  }

})
