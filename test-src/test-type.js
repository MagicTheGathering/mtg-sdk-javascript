/* global describe, it */

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.should()
chai.use(chaiAsPromised)

const { type } = require('../lib/index.js')

describe('type', () => {
  describe('all', () => {
    it('should emit all the types', (cb) => {
      const results = []

      const typeEmitter = type.all()
      typeEmitter.on('data', type => results.push(type))
      typeEmitter.on('error', cb)
      typeEmitter.on('end', () => {
        results.should.have.length.of.at.least(14) // length at time of test
        cb()
      })
    })
  })
})
