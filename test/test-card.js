'use strict';

/* global describe, it */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);

var _require = require('../lib/index.js');

var card = _require.card;

var _require2 = require('ramda');

var pipe = _require2.pipe;
var prop = _require2.prop;


describe('card', function () {
  describe('find', function () {
    it('returns card', function () {
      return card.find(88803).then(pipe(prop('card'), function (card) {
        card.should.have.property('name', 'Choice of Damnations');
        card.should.have.property('manaCost', '{5}{B}');
        card.should.have.property('cmc', 6);
        card.should.have.property('type', 'Sorcery — Arcane');
        card.should.have.deep.property('colors[0]', 'Black');
        card.should.have.deep.property('types[0]', 'Sorcery');
        card.should.have.deep.property('subtypes[0]', 'Arcane');
        card.should.have.property('rarity', 'Rare');
        card.should.have.property('set', 'SOK');
        card.should.have.property('text', 'Target opponent chooses a number. You may have that player lose that much life. If you don\'t, that player sacrifices all but that many permanents.');
        card.should.have.property('flavor', '"Life is a series of choices between bad and worse."\n—Toshiro Umezawa');
        card.should.have.property('artist', 'Tim Hildebrandt');
        card.should.have.property('number', '62');
        card.should.have.property('multiverseid', 88803);
        card.should.have.property('imageUrl', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=88803&type=card');
        card.should.have.property('originalText', 'Target opponent chooses a number. You may have that player lose that much life. If you don\'t, that player sacrifices all but that many permanents.');
        card.should.have.property('originalType', 'Sorcery — Arcane');
        card.should.have.property('id', '1c4aab072d52d283e902f2302afa255b39e0794b');
      }));
    });
  });

  describe('where', function () {
    it('should filter', function () {
      return card.where({ supertypes: 'legendary', subtypes: 'goblin' }).should.eventually.be.an('array').with.deep.property('[0]').that.has.property('name', 'Squee, Goblin Nabob');
    });

    it('should return 1 page of results', function () {
      return Promise.all([card.where({}).should.eventually.be.an('array').that.has.length(100), card.where({ page: 1 }).should.eventually.be.an('array').that.has.length(100)]);
    });

    it('should be able to control the page size', function () {
      return card.where({ page: 1, pageSize: 1 }).should.eventually.be.an('array').that.has.length(1);
    });
  });

  describe('all', function () {
    it('should emit results from multiple pages', function (cb) {
      var results = [];
      var cardEmitter = card.all({ name: 'Squee', pageSize: 5 });
      cardEmitter.on('data', function (card) {
        return results.push(card);
      });
      cardEmitter.on('error', cb);
      cardEmitter.on('end', function () {
        results.should.have.length(9);
        cb();
      });
    });
  });
});
//# sourceMappingURL=test-card.js.map