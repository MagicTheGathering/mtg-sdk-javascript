'use strict';

var request = require('request-promise');
var config = require('./config.js');

var _require = require('ramda'),
    curryN = _require.curryN,
    merge = _require.merge,
    prop = _require.prop;

var Emitter = require('emitter20');

var get = curryN(3, function (type, page, args) {
  return request({
    uri: config.endpoint + '/' + type,
    qs: merge(args, {
      page: page
    }),
    json: true
  }).then(prop(type));
});

module.exports = function (type) {
  return {

    /** Gets a resource by its id. */
    find: function find(id) {
      return request({
        uri: config.endpoint + '/' + type + '/' + id,
        json: true
      });
    },

    /** Gets a resource with a given query. */
    where: get(type, 0),

    /** Gets a resource with a given query (like where), but
        returns an emitter that emits 3 events:
        - data(card): emits a card when it is retrieved from the API
        - error(err): emits an error if the request fails
        - end(): called when all results have been retrieved
    */
    all: function all(args) {
      var emitter = new Emitter();
      var getEmit = function getEmit(type, page, args) {
        return get(type, page, args).then(function (items) {
          if (items.length > 0) {
            items.forEach(function (c) {
              return emitter.trigger('data', c);
            });
            return getEmit(type, page + 1, args); // RECURSION
          } else {
            emitter.trigger('end');
          }
        }).catch(function (err) {
          return emitter.trigger('error', err);
        });
      };
      getEmit(type, 1, args);

      return emitter;
    }

  };
};
//# sourceMappingURL=querybuilder.js.map