import opn from 'opn'
module.exports = app => {
  const port = app.get('port')
  app.listen(port, () => {
    console.log(`Welcome to the app - Port ${port}`)
    opn(`http://localhost:${port}/`)
  })
}
