

module.exports = (app) => {
  require('./categoria-route.js')(app)
  require('./genero-route.js')(app)
  require('./usuario-route.js')(app)
  require('./midia-route.js')(app)

  app.get('/', (req, res) => {
    res.status(200).send({
      application: process.env.APP_NAME,
      version: process.env.APP_VERSION
    });
  });
}