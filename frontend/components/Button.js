import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'

const ButtonCustom = styled.span`
   margin-right: 5px;
   border-radius: 5px;
   cursor: pointer;
   padding: 6px;
   color: #FFF;
   background: ${props => props.color};
`

const Button = (props) => {
    const onClick = () => {
        props.onClick(props.data)
    }

	return (
        <ButtonCustom color={props.color} onClick={onClick}>
            {props.children}
        </ButtonCustom>
	)
}

export default Button
