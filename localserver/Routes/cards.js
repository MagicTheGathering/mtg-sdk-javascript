import mtg from 'mtgsdk'
module.exports = app => {
  app.route('/card')
    .get((req, res) => {
      const id = req.query.id || 3
      mtg.card.find(id)
        .then(data => {
          let card = data.card
          const keys = Object.keys(card)
          for (let key of keys) {
            if (card[key] === undefined) {
              delete card[key]
            }
          }

          res.render('cards', { card })
        })
        .catch(() => {
          res.render('card_error')
        })
    })
  app.route('/card/:id')
    .get((req, res) => {
      const id = req.params.id
      mtg.card.find(id)
        .then(data => {
          let card = data.card
          const keys = Object.keys(card)
          for (let key of keys) {
            if (card[key] === undefined) {
              delete card[key]
            }
          }
          res.render('cards', { card })
        })
        .catch(() => {
          res.render('card_error')
        })
    })
}
