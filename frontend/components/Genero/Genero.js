import React, { useState, useEffect }  from 'react'

import GeneroService from '../../services/genero';

import FormGenero from './FormGenero'
import Grid from '../Grid/Grid'
import Layout from '../Layout/Layout'
import Card from '../Card'

const Genero = (props) => {
	const [generos, setGeneros] = useState([])
	const [valuesEdit, setValuesEdit] = useState({})
	const columns = ["id", "nome"]

	const getGeneros = () => {
		GeneroService.getAll()
			.then(res => setGeneros(res.data))
	}

	const resetState = () => {
		setValuesEdit({
			nome: ""
		})
	}

	const onExcluir = (param) => {

		GeneroService.remove(param.id)
			.then((res) => {
				resetState()
				getGeneros()
				alert(res.data.msg || '')
			})
	}

	const onClickRow = (param) => {
		setValuesEdit({
			id: param.id,
			nome: param.nome
		})
	}

	const onSave = (values) => {
        if(values.nome == ""){
            alert("Preencha os campos antes de cadastrar!")
            return false
		}
		
		GeneroService.save(values)
		.then((res) => {
			getGeneros()
			alert(res.data.msg || '')
		})
	}

	const onEdit = (values) => {
        if(!valuesEdit.nome){
            alert("Selecione um registro para editar!")
            return false
		}
		
		GeneroService.update(values.id, {
			nome: values.nome || valuesEdit.nome
		})
		.then((res) => {
			resetState()
			getGeneros()
			alert(res.data.msg || '')
		})
	}

	useEffect(() => {
		getGeneros()
   }, [])

	return (
        <Layout>
            <Card>
                <FormGenero data={valuesEdit} onSave={onSave} onEdit={onEdit}/>
                <hr/>
                <Grid columns={columns} data={generos} onClickRow={onClickRow} excluir={onExcluir}/>
            </Card>
        </Layout>
	  )
}

export default Genero
