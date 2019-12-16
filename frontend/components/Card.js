import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	margin: 10px;
	min-width: 200px;
	padding: 10px;
`

const Card = (props) => {
	return (
		<CardStyle {...props}>{props.children}</CardStyle>
	)
}

export default Card

