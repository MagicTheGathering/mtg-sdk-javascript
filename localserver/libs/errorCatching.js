module.exports = app => {
  // error report view
  app.use(function (req, res) {
    res.status(404)
    // respond with html page
    if (req.accepts('html')) {
      res.render('error')
      return
    }
    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' })
      return
    }
    // default to plain-text. send()
    res.type('txt').send('Not found')
  })
}
