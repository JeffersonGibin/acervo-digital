import styled from 'styled-components'

const FormCategoriaStyle = styled.div`
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
    background-color: #2196F3!important;
`

const ButtonEditar = styled.button`
    background-color: #ff9800 !important;
`

module.exports = {
    FormCategoriaStyle,
    InputText,
    Form,
    ButtonCadastrar,
    ButtonEditar
}