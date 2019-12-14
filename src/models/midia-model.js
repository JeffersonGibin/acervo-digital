const { DB, getMarkerQuery, getValues, getKeys } = require('../db')
const {
  SQL_QUERY_MEDIA_ALL,
  SQL_QUERY_NOME_EXISTS,
  SQL_QUERY_BY_ID,
  SQL_QUERY_MIDIAS_DESTAQUE
}  = require('./querys/midia-query')

/**
 * Model Midia
*/
module.exports = {

	/**
	 * Verifica se um nome de uma Midia já existe
	*/
	nomeExists : async (nome) => {
		const query = {
			text: SQL_QUERY_NOME_EXISTS,
			values: [true, true, true, true, nome],
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
	 * Cadastra uma nova midia
	*/
	create : async (data) => {
		const { nome, descricao, categoriaid, generoid, destaque } = data
		const entity = {
			midia: async () => {
				const query = {
					text: 'INSERT INTO midia (nome, descricao, categoriaid, destaque) VALUES($1, $2, $3, $4) RETURNING id',
					values: [nome, descricao, categoriaid, destaque]
				}
		
				return await DB.query(query)
			},
			midiaGenero: async (midiaID) => {
				const query = {
					text: 'INSERT INTO midia_genero (generoid, midiaid) VALUES($1, $2) RETURNING id',
					values: [generoid, midiaID]
				}
		
				return await DB.query(query)
			}
		}

		await DB.query('BEGIN')
		const midiaID = await entity.midia()
			.then((response) => response.rows[0].id)

		return entity.midiaGenero(midiaID)
			.then(() => {
				return DB.query('COMMIT').then(() => {
					return {
						sucesso: true
					}
				})
			})
			.catch((e) => {
				return DB.query('ROLLBACK').then(() => {
					return {
						sucesso: false
					}
				})
			})
	},

	/**
	 * Busca midias
	*/
	read : async (pagina, limite) => {
		const query = {
			text: SQL_QUERY_MEDIA_ALL,
			values: [true, true, true, true, limite, pagina],
		}

		const responseDB = await DB.query(query)
		return responseDB.rows
	},

	/**
	 * Busca midias em destaque
	*/
	readAllByPrincipal: async (id) => {

		const query = {
			text: SQL_QUERY_MIDIAS_DESTAQUE,
			values: [true, true, true, true, true],
		}

		const responseDB = await DB.query(query)
		return responseDB.rows
	},

	/**
	 * Busca um midia por id
	*/
	readByID: async (id) => {

		const query = {
			text: SQL_QUERY_BY_ID,
			values: [true, true, true, true, id],
		}

		const responseDB = await DB.query(query)
		return responseDB.rows[0]
	},

	/**
	 * Atualiza os dados de uma midia
	*/
	update : async (id, old_generoid, data) => {
		
		const { nome, descricao, categoriaid, generoid, destaque } = data
		const entity = {
			midia: async () => {
				const query = {
					text: 'UPDATE midia SET nome = $1, descricao = $2, categoriaid = $3, destaque = $4 WHERE id = $5 RETURNING 1',
					values: [nome, descricao, categoriaid, destaque, id]
				}
				
				return await DB.query(query)
			},
			midiaGenero: async () => {
				const query = {
					text: 'UPDATE midia_genero SET generoid = $1, midiaid = $2 WHERE generoid = $3 AND midiaid = $4',
					values: [generoid, id, old_generoid, id]
				}
				
				return await DB.query(query)
			}
		}
		

		await DB.query('BEGIN')
		await entity.midia()

		return entity.midiaGenero()
			.then(() => {
				return DB.query('COMMIT').then(() => {
					return {
						sucesso: true
					}
				})
			})
			.catch((e) => {
				return DB.query('ROLLBACK').then(() => {
					return {
						sucesso: false
					}
				})
			})
	},

	/**
	 * Desabilita os dados de uma midia
	*/
	disabled : async (id) => {
		const entity = {
			midia: async () => {
				const query = {
					text: 'UPDATE midia SET ativo = $1 WHERE id = $2',
					values: [false, id]
				}
				
				return await DB.query(query)
			},
			midiaGenero: async () => {
				const query = {
					text: 'UPDATE midia_genero SET ativo = $1 WHERE midiaid = $2',
					values: [false, id]
				}
				
				return await DB.query(query)
			}
		}

		return entity.midiaGenero()
			.then(() => {
				return DB.query('COMMIT').then(() => {
					return {
						sucesso: true
					}
				})
			})
			.catch((e) => {
				return DB.query('ROLLBACK').then(() => {
					return {
						sucesso: false
					}
				})
			})
	},
}