# Magic: The Gathering SDK

[![npm version](https://img.shields.io/npm/v/mtgsdk)](https://www.npmjs.com/package/mtgsdk)
[![discord](https://img.shields.io/badge/discord-mtg%20developers-738bd7.svg)](https://discord.gg/qwGJNnP)

This is the Magic: The Gathering SDK Javascript implementation. It is a wrapper around the MTG API of [magicthegathering.io](http://magicthegathering.io/).

## Installation

```
npm install mtgsdk
```

## Usage
```js
const mtg = require('mtgsdk')

const result = await mtg.card.find(3)
console.log(result.card.name) // "Black Lotus"

const result = await mtg.set.find('AER')
console.log(result.set.name) // "Aether Revolt"
```

Query cards and sets by any property:

```js
const result = await card.where({ supertypes: 'legendary', subtypes: 'goblin' })
console.log(cards[0].name) // "Squee, Goblin Nabob"

const result = await set.where({ block: 'Shadows over Innistrad', border: 'black' })
console.log(sets[0].name) // "Welcome Deck 2016"
console.log(sets[1].name) // "Shadows over Innistrad"
console.log(sets[2].name) // "Eldritch Moon"
```

Retrieve cards across multiple pages of results:

```js
card.all({ name: 'Squee', pageSize: 1 })
.on('data', card => {
    console.log(card.name)
})

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
