import styled from 'styled-components'

const Container = styled.div `
    background: #f7f7f7;
    justify-content: center;
    display: flex;
    height: 100vh;
`

const Form = styled.div`
    grid-template-rows: 30px auto 1fr 1fr 1fr;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.08);
    justify-content: center;
    background: #fff;
    display: grid;
    row-gap: 15px;
    padding: 35px;
    width: 300px;
`

const Logo = styled.div`
    text-align:center;
    font-size: 24px;
    text-align: center;
    font-size: 24px;
    color: #4d4d4d;
    letter-spacing: 5px;
    font-weight: bold
`

const Titulo = styled.div`
    text-align: center;
    font-size: 14px;
`

const BoxLogin = styled.div`
    flex-direction: column;
    justify-content: center;
    display: flex;
    padding: 10px;
`

const BoxInput = styled.div`
    padding: 2px;

    & > input {
        border: 1px solid #e3e3e3;
        padding: 2px 10px 2px;
        border-radius: 5px;
        background: #FFF;
        margin-top:5px;
        color: #25384A;
        width: 250px;
        height: 30px;
    }
`

const BtnEntrar = styled.button`
    border-radius: 5px;
    background: #00adff;
    height: 30px;
    padding: 5px;
    color: #FFF;
    border: 0;
    margin: 0
`

const Message = styled.div`
    border-radius: 10px;
    background:  ${props => props.tema == 'sucesso' ? "#27ae60" : "#e74c3c" };
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
    padding: 10px;
    margin: 10px;
`

module.exports = {
    Container,
    BoxLogin,
    BtnEntrar,
    Form,
    Logo,
    Titulo,
    BoxInput,
    Message
}