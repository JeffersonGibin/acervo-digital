import React from 'react'
import styled from 'styled-components'


const Application = styled.div`
	font-family: 'Roboto', sans-serif; 
	height: 100vh;
	display: grid;
	grid-template-rows: 150px 280px;
`

const TopBarHeader = styled.div`
	display: grid;
	grid-template-columns: 1fr 200px;
	height:40px;
	background: #25384A;

	& > .topBar-left {
		max-width: 200px;
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		color: #FFFFFF;
		font-weight: bold;
	}

	& > .topBar-right {
		color: #FFFFFF;
		font-weight: bold;
		text-align: center;
		line-height: 40px;
	}
`

const TopBarFooter  = styled.div`
	text-align:center;
	color: #FFFFFF;
	font-weight: bold;
	height: 110px;
	position: relative;
	
	& > .menu {
		padding: 0px;
		margin: 0px;
		list-style: none;
		height: 60px;
		position: absolute;
		right: 0;
		left: 0;
		top: 50px;
		line-height: 60px;
	}

	& > .menu > li {
		display: inline;
	}

	& > .menu > li > a {
		padding: 2px 15px;
		display: inline-block;
		color: #333;
		text-decoration: none;
		color: #FFFFFF;
		font-weight: bold;
	}
`
const Header = styled.div`
  background: #2C3E50;
`

const Destaque = styled.div`

	& > .destaque-box {
		background: #2C3E50;
		font-size: 20px;
		color: #FFFFFF
	}
	
	& > .destaque-box > .destaque-titulo {
		display: grid;
		grid-template-columns: 1fr;
		margin: 10px;
		padding: 6px;
	}

	& > .destaque-box > .destaque-conteudo {
		display: grid; 
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}

	& > .destaque-box > .destaque-conteudo > .cards {
		color: black;
		margin: 10px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #FFFFFF;
	}
	  
`
const Conteudo = styled.div`
`

export default () => {
  return (
    <Application>
      <Header>
			<TopBarHeader>
				<div class="topBar-left">Acervo Digital</div>
				<div class="topBar-right">
					<span class="welcome">Olá Jefferson </span>
					<span class="logoff">| <a href="">Sair</a></span>
				</div>
			</TopBarHeader>
			<TopBarFooter>
				<ul class="menu">
					<li><a href="">Usuários</a></li>
					<li><a href="">Categorias</a></li>
					<li><a href="">Gêneros</a></li>
					<li><a href="">Midias</a></li>
				</ul>
			</TopBarFooter>
	  </Header>
      <Destaque>
		  <div class="destaque-box">
			  <div class="destaque-titulo">FILMES</div>
			  <div class="destaque-conteudo">
				<div class="cards">
					Cards
				</div>
				<div class="cards">
					Cards
				</div>
				<div class="cards">
					Cards
				</div>
				<div class="cards">
					Cards
				</div>
				<div class="cards">
					Cards
				</div>
			  </div>
		  </div>
	  </Destaque>
      <Conteudo>
			<Destaque>
				<div class="destaque-box">
					<div class="destaque-titulo">SÉRIES</div>
					<div class="destaque-conteudo">
						<div class="cards">
							Cards
						</div>
						<div class="cards">
							Cards
						</div>
						<div class="cards">
							Cards
						</div>
						<div class="cards">
							Cards
						</div>
						<div class="cards">
							Cards
						</div>
					</div>
				</div>
			</Destaque>
			<Destaque>
				<div class="destaque-box">
					<div class="destaque-titulo">DESENHOS</div>
					<div class="destaque-conteudo">
						<div class="cards">
							Cards
						</div>
						<div class="cards">
							Cards
						</div>
						<div class="cards">
							Cards
						</div>
						<div class="cards">
							Cards
						</div>
						<div class="cards">
							Cards
						</div>
					</div>
				</div>
			</Destaque> 			
		</Conteudo>    
    </Application>
  )
}
