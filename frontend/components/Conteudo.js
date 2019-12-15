import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'
import Card from './Card'

const ConteudoStyle = styled(Card)`
    background: #FF0000;
`

const Conteudo = (props) => {
	return (
		<ConteudoStyle>{props.children}</ConteudoStyle>
	)
}

export default Conteudo