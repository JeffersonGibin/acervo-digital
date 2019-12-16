import API from './api';

const getAll = async () => {
    return  await API.get('/usuario?limite=9999')
    .then(res => res.data)
}

const save = (params) => {
    return  API.post('/usuario', {
        ...params
    })
}

const update = (id, params) => {
    console.log("TESTE 123", params)
    return  API.put('/usuario/'+id, {
        ...params
    })
}

const remove = (id) => {    
    return  API.delete('/usuario/'+id)
}

module.exports = {
    getAll,
    save,
    update,
    remove
}