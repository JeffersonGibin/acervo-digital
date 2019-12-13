const { check, validationResult } = require('express-validator/check'); 
const { Usuario } = require('../controllers')

module.exports = (app) => {

    // usuarios
    app.get('/v1/usuario', (req, res) => {
		Usuario.getAll(req, res)
			.then((usuario) => {
				res.status(200).send({
					status: usuario.length > 0,
					data: usuario || []
				})
			})
    });

    // salvar
    app.post('/v1/usuario', [
		check('nome').isString(),
		check('senha').isString(),
		check('email').isString()
	], (req, res) => {
		
		console.log(req)
		const schemaErrors = validationResult(req);
		if (!schemaErrors.isEmpty()) {
			return res.status(403).send(schemaErrors.array());
		}
		Usuario.save(req.parametro.body)
		.then((response) => {
			res.status(200).send({
				status: usuario.length > 0,
				data: usuario || []
			})
		})

    });
    
    // atualizar
    app.put('/v1/usuario/:id', (req, res) => {

    });

    // delete
    app.delete('/v1/usuario/:id', (req, res) => {

    });
}