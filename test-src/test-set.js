/* global describe, it */
const chai = require('chai')
const assert = chai.assert

const { set } = require('../lib/index.js')
const { pipe, prop } = require('ramda')

describe('set', () => {
  describe('find', () => {
    it('returns set', () => {
      return set.find('SOI').then(pipe(prop('set'), set => {
        const booster = [
          ['rare', 'mythic rare'],
          'uncommon',
          'uncommon',
          'uncommon',
          'common',
          'common',
          'common',
          'common',
          'common',
          'common',
          'common',
          'common',
          ['common', 'double faced rare', 'double faced mythic rare'],
          ['double faced common', 'double faced uncommon'],
          ['land', 'checklist'],
          'marketing'
        ]
        assert.deepEqual(set.booster, booster)
        assert.equal(set.code, 'SOI')
        assert.equal(set.name, 'Shadows over Innistrad')
        assert.equal(set.type, 'expansion')
        assert.equal(set.border, 'black')
        assert.equal(set.releaseDate, '2016-04-08')
        assert.equal(set.block, 'Shadows over Innistrad')
      }))
    })
  })

  describe('where', () => {
    it('should filter', () => {
      return set.where({ border: 'black', name: 'Shadows over Innistrad' }).then(result => {
        assert.deepEqual(result[0].border, 'black')
        assert.deepEqual(result[0].name, 'Shadows over Innistrad')
      })
    })
  })

  describe('all', () => {
    it('should emit all results', (cb) => {
      const results = []
      const setEmitter = set.all({ name: 'masters' })
      setEmitter.on('data', set => results.push(set))
      setEmitter.on('error', cb)
      setEmitter.on('end', () => {
        assert.equal(results.length, 10)
        cb()
      })
    })
  })
})
