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
    return  API.post('/usuario', {
        ...params
    })
}

module.exports = {
    getAll,
    save
}