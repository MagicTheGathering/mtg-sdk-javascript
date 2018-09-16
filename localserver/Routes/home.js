
module.exports = app => {
  app.route('/home')
    .get((req, res) => {
      const data = {
        ViewBag: {
          title: 'Home'
        }
      }
      res.render('home', data, (err, html) => {
        if (err) {
          console.log('ERROR')
          console.log(err)
          res.status(500).json(err)
        } else {
          res.status(200).send(html)
        }
      })
    })
}
