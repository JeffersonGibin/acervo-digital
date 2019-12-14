const { DB, getMarkerQuery, getValues, getKeys } = require('../db')
const {
	SQL_QUERY_NAME_EXISTS,
	SQL_QUERY_ALL_CATEGORY,
	SQL_QUERY_CATEGORY_BY_ID
}  = require('./querys/categoria-query')
  
/**
 * Model Categoria
*/
module.exports = {

	/**
	 * Verifica se um nome de uma Categoria já existe
	*/
	nomeExists : async (nome) => {
		const query = {
			text: SQL_QUERY_NAME_EXISTS,
			values: [true, nome],
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
	 * Cadastra uma nova Categoria
	*/
	create : async (data) => {
		const queryMarker = getMarkerQuery(data)
		const query = {
			text: 'INSERT INTO categoria (' + getKeys(data) + ') VALUES(' + queryMarker + ') RETURNING id',
			values: getValues(data)
		}

		return await DB.query(query)
	},

	/**
	 * Busca Categorias
	*/
	read : async (pagina, limite) => {

		const query = {
			text: SQL_QUERY_ALL_CATEGORY,
			values: [true, limite, pagina],
		}

		const responseDB = await DB.query(query)
		return responseDB.rows
	},

	/**
	 * Busca um Categoria por id
	*/
	readByID: async (id) => {

		const query = {
			text: SQL_QUERY_CATEGORY_BY_ID,
			values: [true, id],
		}

		const responseDB = await DB.query(query)
		return responseDB.rows[0]
	},

	/**
	 * Atualiza os dados de uma Categoria
	*/
	update : async (id, data) => {
		const query = {
			text: 'UPDATE categoria SET nome = $1 WHERE ativo = $2 AND id = $3',
			values: [...getValues(data), true, id],
		}


		return await DB.query(query)
	},

	/**
	 * Desabilita os dados de uma Categoria
	*/
	disabled : async (id) => {
		const query = {
			text: 'UPDATE categoria SET ativo = $1 WHERE id = $2',
			values: [false, id],
		}


		return await DB.query(query)
	},
}