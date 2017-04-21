# Magic: The Gathering SDK

[![mtg-developers on discord](https://img.shields.io/badge/discord-mtg%20developers-738bd7.svg)](https://discord.gg/qwGJNnP)
[![Build Status](https://travis-ci.org/MagicTheGathering/mtg-sdk-javascript.svg?branch=master)](https://travis-ci.org/MagicTheGathering/mtg-sdk-javascript)

This is the Magic: The Gathering SDK Javascript implementation. It is a wrapper around the MTG API of [magicthegathering.io](http://magicthegathering.io/).

## Installation

    npm install --save mtgsdk

## Usage
```javascript
const mtg = require('mtgsdk')

mtg.card.find(3)
.then(result => {
    console.log(result.card.name) // "Black Lotus"
})

mtg.set.find('AER')
.then(result => {
    console.log(result.set.name) // "Aether Revolt"
})
```

Query cards and sets by any property:

```javascript
card.where({ supertypes: 'legendary', subtypes: 'goblin' })
.then(cards => {
    console.log(cards[0].name) // "Squee, Goblin Nabob"
})

set.where({ block: 'Shadows over Innistrad', border: 'black' })
.then(sets => {
  console.log(sets[0].name) // "Welcome Deck 2016"
  console.log(sets[1].name) // "Shadows over Innistrad"
  console.log(sets[2].name) // "Eldritch Moon"
})
```

Retrieve cards across multiple pages of results:

```javascript
card.all({ name: 'Squee', pageSize: 1 })
.on('data', card => {
    console.log(card.name)
})

// Will print:
// Squee
// Squee, Goblin Nabob Avatar
// Squee's Toy
// Squeeze
// Squee, Goblin Nabob
// Squee's Embrace
// Squee's Revenge
// Squee, Goblin Nabob
// Squee, Goblin Nabob
// (the duplicates are from different sets)

set.all({ name: 'limited' })
.on('data', set => {
  console.log(set.name)
})

// Will print:
// Limited Edition Alpha
// Limited Edition Beta
// Unlimited Edition
```

### Properties

#### Card

    name
    multiverseid
    layout
    names
    manaCost
    cmc
    colors
    type
    types
    subtypes
    rarity
    text
    flavor
    artist
    number
    power
    toughness
    reserved
    rulings
    printings
    originalText
    originalType
    legalities
    source
    imageUrl
    set
    id

#### Set

    code
    name
    gatherer_code
    old_code
    magic_cards_info_code
    release_date
    border
    type
    block
    online_only
    booster
    mkm_id
    mkm_name

**Please note:** Currently, sets are only queryable on their _name_ and _block_ fields.

### Development

- es6 ([babel](https://babeljs.io))
- [standardjs](http://standardjs.com)
- [promises](https://www.promisejs.org)

Build tasks are in npm scripts:

    npm run
