import React, { useState } from 'react';
import {
    Container,
    BoxLogin,
    BtnEntrar,
    Form,
    Logo,
    Titulo,
	BoxInput,
	Message
} from './Login.style'

import LoginService from '../services/login';

const Login = () => {
    
	const [usuario, setUsuario] = useState("");
	const [senha, setSenha] = useState("");
	const [isSignIn, setIsSignIn] = useState("");
	const [message, setMessage] = useState("");
	
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
			setIsSignIn("sucesso")
			setMessage("Sucesso, você será redirecionado...")
            window.location = './dashbord'
        }else{
			setIsSignIn("erro")
			setMessage("Erro, você será redirecionado...")
			setTimeout(() => {
				window.location = './login'
			}, "1000")
        }
    }

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
				{isSignIn && <Message tema={isSignIn} >{message}</Message>}
            </BoxLogin>
        </Container>
    )
  }
  
  export default Login