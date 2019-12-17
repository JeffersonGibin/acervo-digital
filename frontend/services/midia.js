import { API, removeDataSession } from './api';

const getAll = async () => {
    return  await API.get('/midia?limite=9999')
    .then(res => res.data)
}

const save = (params) => {
    return  API.post('/midia', {
        ...params
    })
}

const update = (id, generoid, params) => {
    return  API.put('/midia/'+id+'/genero/'+generoid, {
        ...params
    })
}

const remove = (id) => {    
    return  API.delete('/midia/'+id)
}

module.exports = {
    getAll,
    save,
    update,
    remove
}