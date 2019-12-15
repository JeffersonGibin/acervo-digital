const { check, validationResult } = require('express-validator');
const { Usuario } = require('../controllers')
const JWT = require('jsonwebtoken');
/**
 * Router Usuário
 */
module.exports = (app) => {
	app.post('/v1/usuario/login', [
		check('login').isString(),
		check('senha').isString()
	], async (req, res, next) => {
		const login = req.body.usuario || ''
		const password = req.body.senha || ''
		const optionsLogin = await Usuario.signIn(login, password)
		const token = JWT.sign({ ...optionsLogin.data }, process.env.SECRET, {
			expiresIn: 10800 // expires in 3 horas
		});
		
		if(optionsLogin.status){
			res.status(200).json({
				...optionsLogin,
				token
			});
		}
		
		res.status(200).json({
			status: false,
			msg: "Efetue login!"
		});
		  
	});

	app.get('/v1/usuario', (req, res) => {
		Usuario.getAll(req, res)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

	app.get('/v1/usuario/:id', (req, res) => {
		Usuario.getByID(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});

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

	app.delete('/v1/usuario/:id', (req, res) => {
		Usuario.delete(req.params.id)
			.then((response) => res.status(200).send(response))
			.catch((e) => res.status(500).json({ status: false }))
	});
}