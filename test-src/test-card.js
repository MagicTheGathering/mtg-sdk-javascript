const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.should()
chai.use(chaiAsPromised)

const card = require('../lib/card.js')

describe('card', ()=> {
  it('find', ()=> {
    return card.find(88803).then(x => JSON.parse(x).card).then(card=> {
      card.should.have.property('name', 'Choice of Damnations')
      card.should.have.property('manaCost', '{5}{B}'),
      card.should.have.property('cmc', 6),
      card.should.have.property('type', 'Sorcery — Arcane'),
      card.should.have.deep.property('colors[0]', 'Black'),
      card.should.have.deep.property('types[0]', 'Sorcery'),
      card.should.have.deep.property('subtypes[0]', 'Arcane'),
      card.should.have.property('rarity', 'Rare'),
      card.should.have.property('set', 'SOK'),
      card.should.have.property('text', 'Target opponent chooses a number. You may have that player lose that much life. If you don\'t, that player sacrifices all but that many permanents.'),
      card.should.have.property('flavor', "\"Life is a series of choices between bad and worse.\"\n—Toshiro Umezawa"),
      card.should.have.property('artist', 'Tim Hildebrandt'),
      card.should.have.property('number', '62'),
      card.should.have.property('multiverseid', 88803),
      card.should.have.property('imageUrl', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=88803&type=card'),
      card.should.have.property('originalText', "Target opponent chooses a number. You may have that player lose that much life. If you don't, that player sacrifices all but that many permanents."),
      card.should.have.property('originalType', 'Sorcery — Arcane'),
      card.should.have.property('id', '1c4aab072d52d283e902f2302afa255b39e0794b')
    })
  })
})
