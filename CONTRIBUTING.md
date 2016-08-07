# Contributing

Thanks for your interest in contributing to mtg-sdk-javascript! 

Any contributions are greatly appreciated and all skill levels welcome. The project uses ES6 (Javascript with some new syntax for things like functions and assignment, for example) and Promises (a type of object that represents a future value, a helpful abstraction for asynchronous programming).

An example workflow for contributing looks like the following:

1. Fork and clone the repo
1. Create a branch for the new feature
1. Run `npm run watch` to automatically build on edit
1. Write a unit test for the new feature (as seen in [test-card.js](https://github.com/MagicTheGathering/mtg-sdk-javascript/blob/master/test-src/test-card.js))
1. Run `npm test` to make sure the test fails (since you haven't implemented the feature yet)
1. Edit the source code until the new unit test passes
1. Submit a pull request to have your feature reviewed
1. Make any any formatting or functional revisions asked for
1. Once your pull request is accepted, your changes will be merged into the master branch and published to npm!

# Roadmap
You can jump in on any of the features yet to be implemented (unchecked). Follow the approach  Just create an issue to let me know you are working on something, and stay in communication about how it's going.

- [x] `card.find` - find a card by code
- [x] `card.where` - filter cards
- [x] `card.all` - get all cards
- [ ] `set.find` - find a set by code
- [ ] `set.where` - filter sets
- [ ] `set.all` - get all sets
- [ ] `types`- get all types
- [ ] `subtypes` - get all subtypes
- [ ] `supertypes` - get all supertypes

# Contact

You can contact Raine at raineorshine@gmail.com if you have any questions about how to contribute. I'm happy to support you!
