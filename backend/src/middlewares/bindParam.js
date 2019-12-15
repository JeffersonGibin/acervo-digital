
module.exports = (req, res, next) => {

    const body = req.body
    req.parametro = {
        body,
        ...req.query
    }
    next()
}