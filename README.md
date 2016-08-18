# Magic: The Gathering SDK

This is the Magic: The Gathering SDK Javascript implementation. It is a wrapper around the MTG API of [magicthegathering.io](http://magicthegathering.io/).

## Installation

    npm install --save mtgsdk

## Usage

    const mtg = require('mtgsdk')

    mtg.card.find(3)
    .then(result => {
        console.log(result.card.name) // "Black Lotus"
    })

Query cards by any property:

    card.where({ supertypes: 'legendary', subtypes: 'goblin' })
    .then(cards => {
        console.log(cards[0].name) // "Squee, Goblin Nabob"
    })

Retrieve cards across multiple pages of results:

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

### Development

- es6 ([babel](https://babeljs.io))
- [standardjs](http://standardjs.com)
- [promises](https://www.promisejs.org)

Build tasks are in npm scripts:

    npm run
