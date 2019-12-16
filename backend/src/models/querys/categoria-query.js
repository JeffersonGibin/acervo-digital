const SQL_QUERY_NAME_EXISTS = [
    "SELECT ",
    " id ",
    "FROM categoria ",
    "WHERE ativo = $1 ",
    " AND nome = $2 "
].join("")

const SQL_QUERY_ALL_CATEGORY = [
    "SELECT ",
    " id, ",
    " nome ",
    "FROM categoria ",
    "WHERE ativo = $1 ",
    "ORDER BY id DESC ",
    "LIMIT $2 ",
    "OFFSET $3 "
].join("")

const SQL_QUERY_CATEGORY_BY_ID = [
    "SELECT ",
    " id, ",
    " nome ",
    "FROM categoria ",
    "WHERE ativo = $1 ",
    " AND id = $2 "    
].join("")

module.exports = {
    SQL_QUERY_NAME_EXISTS,
    SQL_QUERY_ALL_CATEGORY,
    SQL_QUERY_CATEGORY_BY_ID
}