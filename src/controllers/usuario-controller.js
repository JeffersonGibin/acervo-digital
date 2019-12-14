const md5 = require('md5')
const { Usuario } = require('../models')
const { LIMITE_POR_PAGINA, PAGINA_INICIAL } = require('../constants/constant')

/**
 * Controller de Usuário
*/

module.exports = {

    getByID: (id) => {

        return Usuario.readByID(id)
            .then((response) => {

                return {
                    status: true,
                    data: response
                }
            })        
    },

    getAll: (req, res) => {

        let limite = req.parametro.limite || LIMITE_POR_PAGINA
        let pagina = req.parametro.pagina || PAGINA_INICIAL
        pagina = pagina == 1 ? PAGINA_INICIAL : pagina

        return Usuario.read(pagina, limite)
            .then((response) => {

                return {
                    status: true,
                    data: response
                }
            })
    },

    save: async (parametro) => {
        const senha = md5(parametro.senha) || ''

        const email = await Usuario.emailExists(parametro.email)

        // Verifico se o usuário já não está cadastrado
        if (email.isExists) {
            return {
                status: true,
                msg: "Usuário já cadastrado"
            }
        }

        return Usuario.create({
            nome: parametro.nome,    
            email: parametro.email,    
            senha: senha
        })
            .then(() => {

                return {
                    status: true,
                    msg: "Dados salvos com sucesso"
                }
            })
    },

    update: async (id, parametro) => {
        const senha = md5(parametro.senha) || ''


        const emailOptions = await Usuario.emailExists(parametro.email)

        // Verifico se o usuário já não está cadastrado
        if (emailOptions.isExists && emailOptions.id != id) {
            return {
                status: true,
                msg: "Usuário já cadastrado"
            }
        }

        return Usuario.update(id, {
            nome: parametro.nome,    
            email: parametro.email,    
            senha: senha
        })
            .then((res) => {
                return {
                    status: true,
                    msg: "Dados alterados com sucesso"
                }
            })        
    },


    delete: async (id) => {
        return Usuario.disabled(id)
            .then((res) => {
                return {
                    status: true,
                    msg: "Dados removidos com sucesso"
                }
            })    
    }
}