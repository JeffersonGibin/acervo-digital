import React, { useState } from 'react';
import {
    Container,
    BoxLogin,
    BtnEntrar,
    Form,
    Logo,
    Titulo,
    BoxInput
} from './Login.style'

import LoginService from '../services/login';

const Login = () => {
    const signIn = async () => {
        event.preventDefault();

        if(!usuario){
			alert("Por favor informe o usuário!")   
			return false
        }

		if(!senha){
			alert("Por favor informe a senha!")   
			return false
        }

        const dataService = await LoginService.signIn(usuario, senha)
        
        if(dataService.status){
            window.location = './dashbord'
        }else{
            window.location = './login'
        }
    }

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <Container>
            
            <BoxLogin>
                <Form>
                    <Logo>Acervo Digital</Logo>
                    <Titulo>Por favor efetue login</Titulo>
                    <BoxInput>
                        <input name="login" type="text" placeholder="E-mail" onChange={(event) => setUsuario(event.target.value)}/>
                    </BoxInput>
                    <BoxInput>
                        <input name="login"  type="password" placeholder="Senha" onChange={(event) => setSenha(event.target.value)}/>
                    </BoxInput>
                    <BtnEntrar onClick={signIn}>
                        Entrar
                    </BtnEntrar>
                </Form>
            </BoxLogin>
        </Container>
    )
  }
  
  export default Login