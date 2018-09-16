const qb = require('./querybuilder.js')
const unq = require('./unqueryable')
module.exports = {
  card: qb('cards'),
  set: qb('sets'),
  type: unq('types'),
  supertype: unq('supertypes'),
  subtype: unq('subtypes')
}
