import { API, removeDataSession } from './api';

const getAll = async () => {
    return  await API.get('/usuario?limite=9999')
    .then(res => res.data)
    .catch(e => removeDataSession(e.response.status))
}

const save = (params) => {
    return  API.post('/usuario', {
        ...params
    })
    .catch(e => removeDataSession(e.response.status))
}

const update = (id, params) => {
    console.log("TESTE 123", params)
    return  API.put('/usuario/'+id, {
        ...params
    })
    .catch(e => removeDataSession(e.response.status))
}

const remove = (id) => {    
    return  API.delete('/usuario/'+id)
    .catch(e => removeDataSession(e.response.status))
}

module.exports = {
    getAll,
    save,
    update,
    remove
}