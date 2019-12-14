const { check, validationResult } = require('express-validator');
const { Midia } = require('../controllers')

/**
 * Router Midia
 */
module.exports = (app) => {
	app.get('/v1/midia/destaque', (req, res) => {
		Midia.getAllPrincipal(req, res)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	app.get('/v1/midia', (req, res) => {
		Midia.getAll(req, res)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	app.get('/v1/midia/:id', (req, res) => {
		Midia.getByID(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	app.post('/v1/midia', [
		check('nome').isString(),
		check('descricao').isString(),
		check('categoriaid').isInt(),
		check('generoid').isInt(),
		check('destaque').isBoolean(),
	], (req, res) => {

		const schemaErrors = validationResult(req);

		if (!schemaErrors.isEmpty()) {
			return res.status(403).send(schemaErrors.array());
		}

		Midia.save(req.parametro.body)
			.then((response) => res.status(200).json({ ...response }))
			.catch((e) => res.status(500).json({ status: false }))

	});

	app.put('/v1/midia/:id/genero/:generoid', [
		check('nome').isString(),
		check('descricao').isString(),
		check('categoriaid').isInt(),
		check('generoid').isInt(),
		check('destaque').isBoolean(),
	], (req, res) => {

		const schemaErrors = validationResult(req);

		if (!schemaErrors.isEmpty()) {
			return res.status(403).json(schemaErrors.array());
		}

		Midia.update(req.params.id, req.params.generoid, req.parametro.body)
			.then((response) => res.status(200).json({ ...response }))
			.catch((e) => {
				res.status(500).json({ status: false })
			})
	});

	app.delete('/v1/midia/:id', (req, res) => {
		Midia.delete(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	/**
	 * Upload de imagem
	 */
	app.post('/v1/midia/:id/upload', (req, res) => {

	})

	app.delete('/v1/midia/:id/upload', (req, res) => {

	})
}