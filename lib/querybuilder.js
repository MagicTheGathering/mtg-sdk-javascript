'use strict';

var rp = require('request-promise');
var config = require('./config.js');

module.exports = function (type) {
  return {

    /** Get a resource by its id. */
    find: function find(id) {
      return rp(config.endpoint + '/' + type + '/' + id);
    }

  };
};