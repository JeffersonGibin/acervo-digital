
const multer = require('multer')
const { check, validationResult } = require('express-validator');
const md5 = require('md5')
const path = require('path')

const { Midia, Upload } = require('../controllers')
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
	 * Rotas para Upload file
	*/
	app.post('/v1/midia/:id/upload', async (req, res) => {
		function imageExists(res, imagem) {
			return res.json({
				"status": false,
				"msg": "A Mídia já possui uma imagem cadastrada " + "["+imagem+"]"
			});
		}

		function typeFile(req, res) {
			return res.json({
				"status": false,
				"msg": "Envie somente imagens JPG ou PNG!"
			});
		}

		function finishUpload(req, res, err) {
			if (!req.file) {
                return res.json({
					"status": false,
					"msg": "Por favor selecione uma imagem!"
				});
			}
			
			return res.json({
				"status": true,
				"msg": "Upload feito com sucesso!"
			});
		}

		Upload.create(req, res, imageExists, typeFile, finishUpload)
	})

	app.delete('/v1/midia/:id/upload', (req, res) => {

		function callbackFileExists (req, res){
			res.json({
				"status": true,
				"msg": "Imagem removida com sucesso!"
			})
		}

		function callbackNotFileExists (req, res){
			res.json({
				"status": false,
				"msg": "Imagem não existe!"
			})
		}

		Upload.destroy(req, res, callbackFileExists, callbackNotFileExists)
	})
}