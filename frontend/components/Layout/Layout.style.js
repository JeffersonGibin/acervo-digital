import styled from 'styled-components'

const LayoutStyled = styled.div`
	font-family: 'Roboto', sans-serif; 
	height: 100vh;
	display: grid;
	grid-template-rows: 150px 280px;
`

const TopBarHeader = styled.div`
	display: grid;
	grid-template-columns: 1fr 200px;
	height:60px;
	background: #00adff;

	& > .topBar-left {
		max-width: 200px;
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		color: #FFFFFF;
		letter-spacing: 5px;
		font-weight: bold;
		padding:10px;

		& > a {
			color: #FFFFFF;
			text-decoration: none;
		}
	}

	& > .topBar-right {
		color: #FFFFFF;
		text-align: center;
		line-height: 60px;
	}

	& > .topBar-right > .logoff {
		text-decoration: underline;
		cursor: pointer;
	}
`

const TopBarFooter  = styled.div`
	text-align:center;
	color: #4d4d4d;
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
		top: 15px;
		line-height: 60px;
		font-weight: bold;
	}

	& > .menu > li {
		cursor: pointer;
		display: inline;
	}

	& > .menu > li > a {
		padding: 2px 15px;
		display: inline-block;
		color: #333;
		text-decoration: none;
		color: #4d4d4d;
	}
`
const Header = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	background: #FFFFFF;
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

const Separator = styled.hr`
    color: #f00;
	background-color: #CCC;
	text-align:center;
`

module.exports = {
	LayoutStyled,
	TopBarHeader,
	TopBarFooter,
	Header,
	Destaque,
	Conteudo,
	Separator
}
