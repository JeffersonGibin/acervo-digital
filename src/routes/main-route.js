module.exports = (app) => {
  
  app.get('/', async (req, res) => {
    res.status(200).send({
      application: process.env.APP_NAME,
      version: process.env.APP_VERSION
    });
  });
}