import styled from 'styled-components'

const FormUsuarioStyle = styled.div`
    display: flex;
    justify-content: center;
`

const InputText = styled.input`
    border: 1px solid #ccc!important;
    padding: 9px 0px 8px;
    display: block;
    border: none;
    width: 100%;
    margin-bottom: 5px;
    text-indent: 10px;
`

const Form = styled.form`
    min-width: 320px;
    max-width: 600px;
    width: 100%;
`

const ButtonCadastrar = styled.button`
    background-color: #28a745!important;
    font-weight: 600;
`

const ButtonEditar = styled.button`
    background-color: #ffc107 !important;
    font-weight: 600;
`


module.exports = {
    FormUsuarioStyle,
    InputText,
    Form,
    ButtonCadastrar,
    ButtonEditar
}