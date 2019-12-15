const SQL_QUERY_NAME_EXISTS = [
    "SELECT ",
    " id ",
    "FROM genero ",
    "WHERE ativo = $1 ",
    " AND nome = $2"
].join("")

const SQL_QUERY_ALL_GENERO = [
    "SELECT ",
    " id, ",
    " nome ",
    "FROM genero ", 
    "WHERE ativo = $1 ",
    "ORDER BY id ",
    "LIMIT $2 ",
    "OFFSET $3 ",
].join("")

const SQL_QUERY_GENERO_BY_ID = [
    "SELECT ",
    "id, ",
    "nome ",
    "FROM genero ",
    "WHERE ativo = $1 ",
    " AND id = $2 "
].join("")

module.exports = {
    SQL_QUERY_NAME_EXISTS,
    SQL_QUERY_ALL_GENERO,
    SQL_QUERY_GENERO_BY_ID
}