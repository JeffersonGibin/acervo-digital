const { check, validationResult } = require('express-validator');
const { Usuario } = require('../controllers')

module.exports = (app) => {

	// usuarios
	app.get('/v1/usuario', (req, res) => {
		Usuario.getAll(req, res)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	// delete
	app.get('/v1/usuario/:id', (req, res) => {
		Usuario.getByID(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	// salvar
	app.post('/v1/usuario', [
		check('nome').isString(),
		check('senha').isString(),
		check('email').isString()
	], (req, res) => {

		const schemaErrors = validationResult(req);

		if (!schemaErrors.isEmpty()) {
			return res.status(403).send(schemaErrors.array());
		}

		Usuario.save(req.parametro.body)
			.then((response) => res.status(200).json({ ...response }))
			.catch((e) => res.status(500).json({ status: false }))

	});

	// atualizar
	app.put('/v1/usuario/:id', [
		check('nome').isString(),
		check('senha').isString(),
		check('email').isString()
	], (req, res) => {

		const schemaErrors = validationResult(req);

		if (!schemaErrors.isEmpty()) {
			return res.status(403).json(schemaErrors.array());
		}

		Usuario.update(req.params.id, req.parametro.body)
			.then((response) => res.status(200).json({ ...response }))
			.catch((e) => {
				res.status(500).json({ status: false })
			})
	});

	// delete
	app.delete('/v1/usuario/:id', (req, res) => {
		Usuario.delete(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});
}