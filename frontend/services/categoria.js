import { API, removeDataSession } from './api';

const getAll = async () => {
    return  await API.get('/categoria?limite=9999')
    .then(res => res.data)
}

const save = (params) => {
    return  API.post('/categoria', {
        ...params
    })
}

const update = (id, params) => {
    return  API.put('/categoria/'+id, {
        ...params
    })
}

const remove = (id) => {    
    return  API.delete('/categoria/'+id)
}

module.exports = {
    getAll,
    save,
    update,
    remove
}