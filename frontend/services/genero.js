import API from './api';

const getAll = async () => {
    return  await API.get('/genero?limite=9999')
    .then(res => res.data)
}

const save = (params) => {
    return  API.post('/genero', {
        ...params
    })
}

const update = (id, params) => {
    return  API.put('/genero/'+id, {
        ...params
    })
}

const remove = (id) => {    
    return  API.delete('/genero/'+id)
}

module.exports = {
    getAll,
    save,
    update,
    remove
}