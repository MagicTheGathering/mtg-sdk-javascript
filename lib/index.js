'use strict';

var qb = require('./querybuilder.js');
var unq = require('./unqueryable');
module.exports = {
  card: qb('cards'),
  set: qb('sets'),
  type: unq('types'),
  supertype: unq('supertypes'),
  subtype: unq('subtypes')
};
//# sourceMappingURL=index.js.map