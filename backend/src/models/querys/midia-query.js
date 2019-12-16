
const SQL_QUERY_BY_ID = [
    " SELECT ",
    "  m.id,  ",
    "  m.nome, ",
    "  m.descricao, ",
    "  c.nome AS categoria, ",
    "  g.nome AS genero, ",
    "  g.id AS generoid, ",
    "  c.id AS categoriaid, ",
    "  m.imagem ",
    " FROM midia AS m ",
    " JOIN categoria AS c ON c.id = m.categoriaid ",
    " JOIN midia_genero AS mg ON mg.midiaid = m.id ",
    " JOIN genero AS g ON g.id = mg.generoid ",
    " WHERE ",
    "  m.ativo = $1 ",
    "  AND c.ativo = $2 ",
    "  AND g.ativo = $3 ",
    "  AND mg.ativo = $4 ", 
    "  AND m.id = $5 ", 
].join("")

const SQL_QUERY_MEDIA_ALL = [
    " SELECT ",
    "  m.id,  ",
    "  m.nome, ",
    "  m.descricao, ",
    "  c.nome AS categoria, ",
    "  g.nome AS genero, ",
    "  g.id AS generoid, ",
    "  c.id AS categoriaid, ",
    "  m.imagem ",
    " FROM midia AS m ",
    " JOIN categoria AS c ON c.id = m.categoriaid ",
    " JOIN midia_genero AS mg ON mg.midiaid = m.id ",
    " JOIN genero AS g ON g.id = mg.generoid ",
    " WHERE ",
    "  m.ativo = $1 ",
    "  AND c.ativo = $2 ",
    "  AND g.ativo = $3 ",
    "  AND mg.ativo = $4 ",
    " ORDER BY m.id DESC ",
    " LIMIT $5 ",
    " OFFSET $6 "
].join("")


const SQL_QUERY_NOME_EXISTS = [
    "SELECT",
    "  m.id ",
    "FROM midia AS m",
    " JOIN categoria AS c ON c.id = m.categoriaid ",
    " JOIN midia_genero AS mg ON mg.midiaid = m.id ",
    " JOIN genero AS g ON g.id = mg.generoid ",
    "WHERE ",   
    "  m.ativo = $1 ",
    "  AND c.ativo = $2 ",
    "  AND g.ativo = $3 ",
    "  AND mg.ativo = $4 ",
    "  AND m.nome = $5 "
].join("")


const SQL_QUERY_MIDIAS_DESTAQUE = [
    " SELECT ",
    "  m.id,  ",
    "  m.nome, ",
    "  m.descricao, ",
    "  c.nome AS categoria, ",
    "  g.nome AS genero, ",
    "  g.id AS generoid, ",
    "  c.id AS categoriaid, ",
    "  m.imagem ",
    " FROM midia AS m ",
    " JOIN categoria AS c ON c.id = m.categoriaid ",
    " JOIN midia_genero AS mg ON mg.midiaid = m.id ",
    " JOIN genero AS g ON g.id = mg.generoid ",
    " WHERE ",
    "  m.ativo = $1 ",
    "  AND c.ativo = $2 ",
    "  AND g.ativo = $3 ",
    "  AND mg.ativo = $4 ", 
    "  AND m.destaque = $5 ", 
].join("")
    

const SQL_QUERY_IMAGE_BY_ID = [
    "SELECT ",
    " id, ",
    " imagem ",
    "FROM midia ",
    "WHERE ativo = $1 AND id = $2"
].join("")

module.exports = {
    SQL_QUERY_MEDIA_ALL,
    SQL_QUERY_NOME_EXISTS,
    SQL_QUERY_BY_ID,
    SQL_QUERY_MIDIAS_DESTAQUE,
    SQL_QUERY_IMAGE_BY_ID
}