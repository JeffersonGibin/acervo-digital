const { DB, getMarkerQuery, getValues, getKeys } = require('../db')

/**
 * Model Usuário
*/
module.exports = {

	/**
	 * Verifica se um email já existe
	*/
	emailExists : async (email) => {
		const query = {
			text: 'SELECT id  FROM usuario WHERE email = $1',
			values: [email],
		}

		return await DB.query(query)
			.then(response => {
				return {
					id: response.rows.length > 0 && response.rows[0].id,
					isExists: response.rows.length > 0,
				}
			})
	},

	/**
	 * Cadastra um novo usuário
	*/
	create : async (data) => {
		const queryMarker = getMarkerQuery(data)
		const query = {
			text: 'INSERT INTO usuario (' + getKeys(data) + ') VALUES(' + queryMarker + ') RETURNING id',
			values: getValues(data)
		}

		return await DB.query(query)
	},

	/**
	 * Busca usuários
	*/
	read : async (pagina, limite) => {

		const query = {
			text: 'SELECT id, nome, email FROM usuario WHERE ativo = $1 ORDER BY id LIMIT $2 OFFSET $3',
			values: [true, limite, pagina],
		}

		const responseDB = await DB.query(query)
		return responseDB.rows
	},

	/**
	 * Busca um usuario por id
	*/
	readByID: async (id) => {

		const query = {
			text: 'SELECT id, nome, email FROM usuario WHERE ativo = $1 AND id = $2',
			values: [true, id],
		}

		const responseDB = await DB.query(query)
		return responseDB.rows[0]
	},

	/**
	 * Atualiza os dados de um usuário
	*/
	update : async (id, data) => {
		const query = {
			text: 'UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE ativo = $4 AND id = $5',
			values: [...getValues(data), true, id],
		}


		return await DB.query(query)
	},

	/**
	 * Disabilita os dados de um usuário
	*/
	disabled : async (id) => {
		const query = {
			text: 'UPDATE usuario SET ativo = $1 WHERE id = $2',
			values: [false, id],
		}


		return await DB.query(query)
	},
}