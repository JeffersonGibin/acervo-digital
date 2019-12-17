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
        return columns.map((item, index2) => (
            
            <Col key={index2}>
                {!obj[item] ? (<div>
                    <Button color="#d92550" data={obj} onClick={props.excluir}>Excluir</Button>
                </div>):  obj[item]}
            </Col>
        ))
    }

    const renderRow = () => {
        return data.map((row, index) => (
            <GridRow key={index} data={row} onClick={props.onClickRow}>
                {renderColums(row)}
            </GridRow>
        ))        
    }

	return (
        <TableStyle>
            <thead>
                <tr>
                    {columns.push("Ações") && columns.map((column, index) => (
                        <ColHead key={index}>{column.toUpperCase()}</ColHead>
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