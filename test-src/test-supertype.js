/* global describe, it */

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.should()
chai.use(chaiAsPromised)

const { supertype } = require('../lib/index.js')

describe('supertype', () => {
  describe('all', () => {
    it('should emit all the supertypes', (cb) => {
      const results = []

      const supertypeEmitter = supertype.all()
      supertypeEmitter.on('data', supertype => results.push(supertype))
      supertypeEmitter.on('error', cb)
      supertypeEmitter.on('end', () => {
        results.should.have.length.of.at.least(5) // length at time of test
        cb()
      })
    })
  })
})
