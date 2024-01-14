/* global describe, it */
const chai = require('chai')
chai.should()

const { card } = require('../index.js')

describe('card', () => {
  describe('find', () => {
    it('returns card', async () => {
      const result = await card.find(88803)
      result.card.should.have.property('id')
      result.card.should.have.property('name', 'Choice of Damnations')
      result.card.should.have.property('manaCost', '{5}{B}')
      result.card.should.have.property('cmc', 6)
      result.card.should.have.property('type', 'Sorcery — Arcane')
      result.card.should.have.nested.property('colors[0]', 'B')
      result.card.should.have.nested.property('types[0]', 'Sorcery')
      result.card.should.have.nested.property('subtypes[0]', 'Arcane')
      result.card.should.have.property('rarity', 'Rare')
      result.card.should.have.property('set', 'SOK')
      result.card.should.have.property('text', 'Target opponent chooses a number. You may have that player lose that much life. If you don\'t, that player sacrifices all but that many permanents.')
      result.card.should.have.property('flavor', '"Life is a series of choices between bad and worse."\n—Toshiro Umezawa')
      result.card.should.have.property('artist', 'Tim Hildebrandt')
      result.card.should.have.property('number', '62')
      result.card.should.have.property('multiverseid', '88803')
      result.card.should.have.property('imageUrl', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=88803&type=card')
      result.card.should.have.property('originalText', 'Target opponent chooses a number. You may have that player lose that much life. If you don\'t, that player sacrifices all but that many permanents.')
      result.card.should.have.property('originalType', 'Sorcery - Arcane')
    })
  })

  describe('where', () => {
    it('should filter', async () => {
      const result = await card.where({ supertypes: 'legendary', subtypes: 'goblin' })
      result
        .should.be.an('array')
        .with.nested.property('[0]')
        .that.has.nested.property('supertypes[0]', 'Legendary')
    })

    it('should return 1 page of results', async () => {
      const result1 = await card.where({})
      result1
        .should.be.an('array')
        .that.has.length(100)

      const result2 = await card.where({ page: 1 })
      result2
        .should.be.an('array')
        .that.has.length(100)
    })

    it('should be able to control the page size', async () => {
      const result = await card.where({ page: 1, pageSize: 1 })
      result
        .should.be.an('array')
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
        results.should.have.length.of.at.least(10) // length at time of test
        cb()
      })
    })
  })
})
