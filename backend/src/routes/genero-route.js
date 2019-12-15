const { check, validationResult } = require('express-validator');
const { Genero } = require('../controllers')

/**
 * Router Genero
 */
module.exports = (app) => {
	app.get('/v1/genero', (req, res) => {
		Genero.getAll(req, res)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	app.get('/v1/genero/:id', (req, res) => {
		Genero.getByID(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	app.post('/v1/genero', [
		check('nome').isString()
	], (req, res) => {

		const schemaErrors = validationResult(req);

		if (!schemaErrors.isEmpty()) {
			return res.status(403).send(schemaErrors.array());
		}

		Genero.save(req.parametro.body)
			.then((response) => res.status(200).json({ ...response }))
			.catch((e) => res.status(500).json({ status: false }))

	});

	app.put('/v1/genero/:id', [
		check('nome').isString()
	], (req, res) => {

		const schemaErrors = validationResult(req);

		if (!schemaErrors.isEmpty()) {
			return res.status(403).json(schemaErrors.array());
		}

		Genero.update(req.params.id, req.parametro.body)
			.then((response) => res.status(200).json({ ...response }))
			.catch((e) => {
				res.status(500).json({ status: false })
			})
	});

	app.delete('/v1/genero/:id', (req, res) => {
		Genero.delete(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});
}