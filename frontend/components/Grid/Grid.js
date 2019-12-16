import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'

import {
    TableStyle,
    ColHead,
    Col
} from './Grid.style'

import Button from '../Button'
import GridRow from './GridRow'


const Grid = (props) => {
    const {
        columns,
        data
    } = props

    const renderColums = (obj) => {
        obj.acoes = ""
        return Object.values(obj).map((row, index2) => (
            
            <Col key={index2}>
                {!row ? (<div>
                    <Button color="red" data={obj} onClick={props.excluir}>Excluir</Button>
                </div>) : row}
            </Col>
        ))
    }

    const renderRow = () => {
        return data.map((obj, index) => (
            <GridRow key={index} data={obj} onClick={props.onClickRow}>
                {renderColums(obj)}
            </GridRow>
        ))        
    }

	return (
        <TableStyle>
            <thead>
                <tr>
                    {columns.push("Ações") && columns.map((column, index) => (
                        <ColHead key={index}>{column}</ColHead>
                    ))}
                </tr>              
            </thead>
            <tbody>
                {
                    renderRow()
                } 
            </tbody>
        </TableStyle>        
	)
}

export default Grid