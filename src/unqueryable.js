
const qb = require('./querybuilder.js')

module.exports = type => ({

  /** Gets a set of resources of the given type, but
          returns an emitter that emits 3 events:
          - data(resource): emits a resource when it is retrieved from the API
          - error(err): emits an error if the request fails
          - end(): called when all results have been retrieved
      */
  all: () => {
    return qb(type).all()
  }

})
