import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'

const GridRow = (props) => {
    const onClick = (data) => {
        delete props.data.acoes;
        props.onClick(props.data)
    }

	return (
        <tr onClick={onClick}>
            {props.children}
        </tr>
	)
}

export default GridRow
