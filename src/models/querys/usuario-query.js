const SQL_QUERY_NAME_EXISTS = [
    "SELECT ",
    " id ",
    "FROM usuario ",
    "WHERE ativo = $1 ",
    " AND email = $2 "
].join("")

const SQL_QUERY_ALL_USER = [
    "SELECT ",
    " id,",
    " nome,",
    " email ",
    "FROM usuario ",
    "WHERE ativo = $1 ",
    "ORDER BY id ",
    "LIMIT $2 ",
    "OFFSET $3 "
].join("")

const SQL_QUERY_USER_BY_ID = [
    "SELECT",
    " id, ",
    " nome, ",
    " email ",
    "FROM usuario ",
    "WHERE ativo = $1 ",
    "AND id = $2 "
].join("")

module.exports = {
    SQL_QUERY_NAME_EXISTS,
    SQL_QUERY_ALL_USER,
    SQL_QUERY_USER_BY_ID
}