import React, { useState, useEffect }  from 'react'
import { useSession, dataSession } from '../hooks/Session'

import {
	Application,
	TopBarHeader,
	TopBarFooter,
	Header,
} from './Dashbord.style'

import Conteudo from './Conteudo'

const logOff = () => {
	sessionStorage.removeItem("session")
	sessionStorage.removeItem("user_data")

	location = './login'
}

const Dashbord = () => {
	const {nome, email, id} = dataSession()

	return (
		<Application>
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
						<li><a href="">Usuários</a></li>
						<li><a href="">Categorias</a></li>
						<li><a href="">Gêneros</a></li>
						<li><a href="">Midias</a></li>
					</ul>
				</TopBarFooter>
		  </Header>
		  <Conteudo>

		  </Conteudo>
		</Application>
	  )
}

export default Dashbord
