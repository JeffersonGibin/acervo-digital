const { Midia } = require('../models')
const { LIMITE_POR_PAGINA, PAGINA_INICIAL } = require('../constants/constant')

/**
 * Controller de Midia
*/

module.exports = {

    getAllPrincipal: () => {
        return Midia.readAllByPrincipal()
            .then((response) => {

                return {
                    status: true,
                    data: response
                }
            })
    },

    getByID: (id) => {

        return Midia.readByID(id)
            .then((response) => {

                return {
                    status: true,
                    data: response || {}
                }
            })        
            .catch((e) => { 
                console.log(e)
            })
    },

    getAll: (req, res) => {

        let limite = req.parametro.limite || LIMITE_POR_PAGINA
        let pagina = req.parametro.pagina || PAGINA_INICIAL
        pagina = pagina == 1 ? PAGINA_INICIAL : pagina

        return Midia.read(pagina, limite)
            .then((response) => {

                return {
                    status: true,
                    data: response
                }
            })
    },

    save: async (parametro) => {

        
        const nomeOptions = await Midia.nomeExists(parametro.nome)

        // Verifico se o midia já não está cadastrado
        if (nomeOptions.isExists) {
            return {
                status: true,
                msg: "Mídia já cadastrada"
            }
        }


        return Midia.create({
            nome: parametro.nome,    
            descricao: parametro.descricao,    
            categoriaid: parametro.categoriaid,
            generoid: parametro.generoid,
            destaque: parametro.destaque
        })
        .then((response) => {
            return {
                status: response.sucesso,
                msg: response.sucesso ? "Dados salvos com sucesso" : "Erro ao salvar os dados"
            }
        })
    },

    update: async (id, old_generoid, parametro) => {

        const nomeOptions = await Midia.nomeExists(parametro.nome)
        
        // Verifico se o midia já não está cadastrado
        if (nomeOptions.isExists && nomeOptions.id != id) {
            return {
                status: true,
                msg: "Mídia já cadastrada"
            }
        }

        return Midia.update(id, old_generoid, {
            nome: parametro.nome,    
            descricao: parametro.descricao,    
            categoriaid: parametro.categoriaid,
            generoid: parametro.generoid,
            destaque: parametro.destaque
        })
        .then((response) => {
            return {
                status: response.sucesso,
                msg: response.sucesso ? "Dados alterados com sucesso"  : "Erro ao atualizar os dados"
            }
        })        
    },

    delete: async (id) => {
        return Midia.disabled(id)
            .then((response) => {
                return {
                    status: response.sucesso,
                    msg: response.sucesso ? "Dados removidos com sucesso"  : "Erro ao remover os dados"
                }
            })    
    }
}