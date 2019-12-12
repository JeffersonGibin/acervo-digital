const { Usuario } = require('../controllers')

module.exports = (app) => {
   // listar
    app.get('/usuario', (req, res) => {     

      res.status(200).send({
        status: true,
        data: Usuario
      })
    });

    // salvar
    app.post('/usuario', (req, res) => {
        
    });
    
    // atualizar
    app.put('/usuario/:id', (req, res) => {

    });

    // delete
    app.delete('/usuario/:id', (req, res) => {

    });
}