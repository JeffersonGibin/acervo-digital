const { check, validationResult } = require('express-validator');
const { Categoria } = require('../controllers')

/**
 * Router Categoria
 */
module.exports = (app) => {
	app.get('/v1/categoria', (req, res) => {
		Categoria.getAll(req, res)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	app.get('/v1/categoria/:id', (req, res) => {
		Categoria.getByID(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	app.post('/v1/categoria', [
		check('nome').isString()
	], (req, res) => {

		const schemaErrors = validationResult(req);

		if (!schemaErrors.isEmpty()) {
			return res.status(403).send(schemaErrors.array());
		}

		Categoria.save(req.parametro.body)
			.then((response) => res.status(200).json({ ...response }))
			.catch((e) => res.status(500).json({ status: false }))

	});

	app.put('/v1/categoria/:id', [
		check('nome').isString()
	], (req, res) => {

		const schemaErrors = validationResult(req);

		if (!schemaErrors.isEmpty()) {
			return res.status(403).json(schemaErrors.array());
		}

		Categoria.update(req.params.id, req.parametro.body)
			.then((response) => res.status(200).json({ ...response }))
			.catch((e) => {
				res.status(500).json({ status: false })
			})
	});

	app.delete('/v1/categoria/:id', (req, res) => {
		Categoria.delete(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});
}