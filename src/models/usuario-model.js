const { DB, getMarkerQuery, getValues, getKeys } = require('../db')

const {
	SQL_QUERY_NAME_EXISTS,
	SQL_QUERY_ALL_USER,
	SQL_QUERY_USER_BY_ID,
	SQL_QUERY_LOGIN
  }  = require('./querys/usuario-query')
  

/**
 * Model Usuário
*/
module.exports = {

	/**
	 * Verifica se um email já existe
	*/
	emailExists : async (email) => {
		const query = {
			text: SQL_QUERY_NAME_EXISTS,
			values: [true, email],
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
			text: SQL_QUERY_ALL_USER,
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
			text: SQL_QUERY_USER_BY_ID,
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

	signIn: async (login, password) => {
		const query = {
			text: SQL_QUERY_LOGIN,
			values: [login, password],
		}

		return await DB.query(query)
	}
}