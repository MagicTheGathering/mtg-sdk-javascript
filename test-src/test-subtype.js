/* global describe, it */

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.should()
chai.use(chaiAsPromised)

const { subtype } = require('../lib/index.js')

describe('subtype', () => {
  describe('all', () => {
    it('should emit all the subtypes', (cb) => {
      const results = []

      const subtypeEmitter = subtype.all()
      subtypeEmitter.on('data', subtype => results.push(subtype))
      subtypeEmitter.on('error', cb)
      subtypeEmitter.on('end', () => {
        results[0].should.equal('Advisor')
        results.should.have.length.of.at.least(377) // length at time of test
        cb()
      })
    })
  })
})
