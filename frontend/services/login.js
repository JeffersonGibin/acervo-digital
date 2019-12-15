import API from './api';

const signIn = async (usuario, senha) => {
    return await API.post('/usuario/login', {
        usuario: usuario,
        senha: senha,
    })
    .then(res => res.data)
    .catch((err) => {
       return "Erro ao efetuar login"
    })
}

module.exports = {
    signIn
}