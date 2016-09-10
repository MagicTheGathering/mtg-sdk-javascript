/* global describe, it */
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.should()
chai.use(chaiAsPromised)

const { card } = require('../lib/index.js')
const { pipe, prop } = require('ramda')

describe('card', () => {
  describe('find', () => {
    it('returns card', () => {
      return card.find(88803).then(pipe(prop('card'), card => {
        card.should.have.property('name', 'Choice of Damnations')
        card.should.have.property('manaCost', '{5}{B}')
        card.should.have.property('cmc', 6)
        card.should.have.property('type', 'Sorcery — Arcane')
        card.should.have.deep.property('colors[0]', 'Black')
        card.should.have.deep.property('types[0]', 'Sorcery')
        card.should.have.deep.property('subtypes[0]', 'Arcane')
        card.should.have.property('rarity', 'Rare')
        card.should.have.property('set', 'SOK')
        card.should.have.property('text', 'Target opponent chooses a number. You may have that player lose that much life. If you don\'t, that player sacrifices all but that many permanents.')
        card.should.have.property('flavor', '"Life is a series of choices between bad and worse."\n—Toshiro Umezawa')
        card.should.have.property('artist', 'Tim Hildebrandt')
        card.should.have.property('number', '62')
        card.should.have.property('multiverseid', 88803)
        card.should.have.property('imageUrl', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=88803&type=card')
        card.should.have.property('originalText', 'Target opponent chooses a number. You may have that player lose that much life. If you don\'t, that player sacrifices all but that many permanents.')
        card.should.have.property('originalType', 'Sorcery — Arcane')
        card.should.have.property('id', '1c4aab072d52d283e902f2302afa255b39e0794b')
      }))
    })
  })

  describe('where', () => {
    it('should filter', () => {
      return card.where({ supertypes: 'legendary', subtypes: 'goblin' })
        .should.eventually.be.an('array')
        .with.deep.property('[0]')
          .that.has.property('supertypes[0]', 'Legendary')
    })

    it('should return 1 page of results', () => {
      return Promise.all([
        card.where({})
          .should.eventually.be.an('array')
          .that.has.length(100),
        card.where({ page: 1 })
          .should.eventually.be.an('array')
          .that.has.length(100)
      ])
    })

    it('should be able to control the page size', () => {
      return card.where({ page: 1, pageSize: 1 })
        .should.eventually.be.an('array')
        .that.has.length(1)
    })
  })

  describe('all', () => {
    it('should emit results from multiple pages', (cb) => {
      const results = []
      const cardEmitter = card.all({ name: 'Squee', pageSize: 5 })
      cardEmitter.on('data', card => results.push(card))
      cardEmitter.on('error', cb)
      cardEmitter.on('end', () => {
        results.should.have.length(9)
        cb()
      })
    })
  })
})
