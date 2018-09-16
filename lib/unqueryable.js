'use strict';

var qb = require('./querybuilder.js');

module.exports = function (type) {
  return {

    /** Gets a set of resources of the given type, but
            returns an emitter that emits 3 events:
            - data(resource): emits a resource when it is retrieved from the API
            - error(err): emits an error if the request fails
            - end(): called when all results have been retrieved
        */
    all: function all() {
      return qb(type).all();
    }

  };
};
//# sourceMappingURL=unqueryable.js.map