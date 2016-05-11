# Magic: The Gathering SDK

[![PyPI version](https://badge.fury.io/py/mtgsdk.svg)](https://badge.fury.io/py/mtgsdk)
[![Build Status](https://travis-ci.org/MagicTheGathering/mtg-sdk-python.svg?branch=master)](https://travis-ci.org/MagicTheGathering/mtg-sdk-python)
[![Requirements Status](https://requires.io/github/MagicTheGathering/mtg-sdk-python/requirements.svg?branch=master)](https://requires.io/github/MagicTheGathering/mtg-sdk-python/requirements/?branch=master)
[![Code Climate](https://codeclimate.com/github/MagicTheGathering/mtg-sdk-python/badges/gpa.svg)](https://codeclimate.com/github/MagicTheGathering/mtg-sdk-python)
[![Coverage Status](https://coveralls.io/repos/github/MagicTheGathering/mtg-sdk-python/badge.svg?branch=master)](https://coveralls.io/github/MagicTheGathering/mtg-sdk-python?branch=master)

This is the Magic: The Gathering SDK Python implementation. It is a wrapper around the MTG API of [magicthegathering.io](http://magicthegathering.io/).

## Requirements
Python 3 is currently the only supported version for the sdk. More specifically, the package was developed using Python 3.4.

## Installation

Using pip:

    pip install mtgsdk

## Usage

Import (Card and Set will be most used)

    from mtgsdk import Card
    from mtgsdk import Set
    from mtgsdk import Type
    from mtgsdk import Supertype
    from mtgsdk import Subtype
    from mtgsdk import Changelog
    
### Properties Per Class

#### Card

    name
    multiverse_id
    layout
    names
    mana_cost
    cmc
    colors
    type
    supertypes
    subtypes
    rarity
    text
    flavor
    artist
    number
    power
    toughness
    loyalty
    variations
    watermark
    border
    timeshifted
    hand
    life
    reserved
    release_date
    starter
    rulings
    foreign_names
    printings
    original_text
    original_type
    legalities
    source
    image_url
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

#### Changelog

    version
    release_date
    details
    
### Find Card by Multiverse Id

    card = Card.find(386616)
    
### Filter Cards via Query Parameters

    cards = Card.where(set='ktk').where(subtypes='warrior,human').all()
    
### Get all cards (will page through all the data - could take awhile)

    cards = Card.all()
    
### Get all cards, but only a specific page of data

    cards = Card.where(page=5).where(pageSize=1000).all()
    
### Find a Set by code

    set = Set.find('ktk')
    
### Get all sets

    sets = Set.all()
    
### Filter sets via query parameters

    sets = Set.where(name='khans').all()
    
### Get all types

    types = Type.all()
    
### Get all subtypes

    subtypes = Subtype.all()
    
### Get all supertypes

    supertypes = Supertype.all()
    
### Get all changelogs

    changelogs = Changelog.all()
    
## Contributing

1. Fork it ( https://github.com/[my-github-username]/mtg-sdk-python/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
