const { Categoria } = require('../models')
const { LIMITE_POR_PAGINA, PAGINA_INICIAL } = require('../constants/constant')

/**
 * Controller de Categoria
*/

module.exports = {

	getByID: (id) => {

		return Categoria.readByID(id)
			.then((response) => {

				return {
					status: true,
					data: response || {}
				}
			})
	},

	getAll: (req, res) => {

		let limite = req.parametro.limite || LIMITE_POR_PAGINA
		let pagina = req.parametro.pagina || PAGINA_INICIAL
		pagina = pagina == 1 ? PAGINA_INICIAL : pagina

		return Categoria.read(pagina, limite)
			.then((response) => {

				return {
					status: true,
					data: response || []
				}
			})
	},

	save: async (parametro) => {
		const nome = await Categoria.nomeExists(parametro.nome)

		if (nome.isExists) {
			return {
				status: true,
				msg: "Categoria já cadastrado"
			}
		}

		return Categoria.create({
			nome: parametro.nome
		})
			.then(() => {

				return {
					status: true,
					msg: "Dados salvos com sucesso"
				}
			})
	},

	update: async (id, parametro) => {
		const nome = await Categoria.nomeExists(parametro.nome)

		// Verifico se o genêro já não está cadastrado
		if (nome.isExists && nome.id != id) {
			return {
				status: true,
				msg: "Categoria já cadastrado"
			}
		}

		return Categoria.update(id, {
			nome: parametro.nome
		})
			.then((res) => {
				return {
					status: true,
					msg: "Dados alterados com sucesso"
				}
			})
	},


	delete: async (id) => {
		return Categoria.disabled(id)
			.then((res) => {
				return {
					status: true,
					msg: "Dados removidos com sucesso"
				}
			})
	}
}