import styled from 'styled-components'

const TableStyle = styled.table`
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    height: auto;
    overflow: scroll;
    max-height: 500px;
    font-size: 14px;
`

const ColHead = styled.th`
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
`

const Col = styled.td`
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
`

const ButtonActions = styled.span`
   margin-right: 5px;
   cursor: pointer;
   padding: 6px;
   border-radius: 5px;
   color: #FFF;
`
const ButtonEditar = styled(ButtonActions)`
   background: orange;
`
const ButtonExcluir = styled(ButtonActions)`
   background: red;
`

module.exports = {
    TableStyle,
    ColHead,
    Col,
    ButtonEditar,
    ButtonExcluir
}