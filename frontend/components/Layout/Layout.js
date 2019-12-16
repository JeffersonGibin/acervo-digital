import React, { useState, useEffect }  from 'react'
import Hooks from '../../hooks/Session'

import {
	LayoutStyled,
	TopBarHeader,
	TopBarFooter,
	Header,
	Conteudo,
} from './Layout.style'

const logOff = () => {
	sessionStorage.removeItem("session")
	sessionStorage.removeItem("user_data")

	location = './login'
}

const Layout = (props) => {
	Hooks.useSession()

	const {nome, email, id} = Hooks.getDataSession()	

	return (
		<LayoutStyled>
		  <Header>
				<TopBarHeader>
					<div className="topBar-left">Acervo Digital</div>
					<div className="topBar-right">
						<span className="welcome">Olá {nome  || ''} | </span>
						<span className="logoff"><a onClick={logOff}>Sair</a></span>
					</div>
				</TopBarHeader>
				<TopBarFooter>
					<ul className="menu">
						<li><a href="./usuarios">Usuários</a></li>
						<li><a href="./categorias">Categorias</a></li>
						<li><a href="./generos">Gêneros</a></li>
						<li><a href="./midias">Midias</a></li>
					</ul>
				</TopBarFooter>
		  </Header>
		  <Conteudo>
		  	{props.children}
		  </Conteudo>
		</LayoutStyled>
	)
}

export default Layout
