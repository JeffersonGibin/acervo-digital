import { API, removeDataSession } from './api';

const getAll = async () => {
    return  await API.get('/genero?limite=9999')
    .then(res => res.data)
    .catch(e => removeDataSession(e.response.status))
}

const save = (params) => {
    return  API.post('/genero', {
        ...params
    })
    .catch(e => removeDataSession(e.response.status))
}

const update = (id, params) => {
    return  API.put('/genero/'+id, {
        ...params
    })
    .catch(e => removeDataSession(e.response.status))
}

const remove = (id) => {    
    return  API.delete('/genero/'+id)
    .catch(e => removeDataSession(e.response.status))
}

module.exports = {
    getAll,
    save,
    update,
    remove
}