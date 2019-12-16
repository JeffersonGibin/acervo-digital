import { API } from './api';

const signIn = async (usuario, senha) => {
    return await API.post('/usuario/login', {
        usuario: usuario,
        senha: senha,
    })
    .then((res) => {
        const response = res.data
        if(response.status){
            sessionStorage.removeItem("session")
            sessionStorage.setItem('session', response.token);
            sessionStorage.setItem("user_data", JSON.stringify(response.data))
        }

        return response

    })
    .catch((err) => {
       return "Erro ao efetuar login"
    })
}

module.exports = {
    signIn
}