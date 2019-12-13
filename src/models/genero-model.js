const { DB, getMarkerQuery, getValues, getKeys } = require('../db')

/**
 * Model Gênero
*/
module.exports = {

	/**
	 * Verifica se um nome de um Gênero já existe
	*/
	nomeExists : async (nome) => {
		const query = {
			text: 'SELECT id FROM genero WHERE nome = $1',
			values: [nome],
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
	 * Cadastra um novo Gênero
	*/
	create : async (data) => {
		const queryMarker = getMarkerQuery(data)
		const query = {
			text: 'INSERT INTO genero (' + getKeys(data) + ') VALUES(' + queryMarker + ') RETURNING id',
			values: getValues(data)
		}

		return await DB.query(query)
	},

	/**
	 * Busca Gêneros
	*/
	read : async (pagina, limite) => {

		const query = {
			text: 'SELECT id, nome FROM genero WHERE ativo = $1 ORDER BY id LIMIT $2 OFFSET $3',
			values: [true, limite, pagina],
		}

		const responseDB = await DB.query(query)
		return responseDB.rows
	},

	/**
	 * Busca um Gênero por id
	*/
	readByID: async (id) => {

		const query = {
			text: 'SELECT id, nome FROM genero WHERE ativo = $1 AND id = $2',
			values: [true, id],
		}

		const responseDB = await DB.query(query)
		return responseDB.rows[0]
	},

	/**
	 * Atualiza os dados de um genero
	*/
	update : async (id, data) => {
		const query = {
			text: 'UPDATE genero SET nome = $1 WHERE ativo = $2 AND id = $3',
			values: [...getValues(data), true, id],
		}


		return await DB.query(query)
	},

	/**
	 * Disabilita os dados de um genero
	*/
	disabled : async (id) => {
		const query = {
			text: 'UPDATE genero SET ativo = $1 WHERE id = $2',
			values: [false, id],
		}


		return await DB.query(query)
	},
}