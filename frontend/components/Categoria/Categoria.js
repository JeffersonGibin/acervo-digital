import React, { useState, useEffect }  from 'react'

import CategoriaService from '../../services/categoria';

import FormCategoria from './FormCategoria'
import Grid from '../Grid/Grid'
import Layout from '../Layout/Layout'
import Card from '../Card'

const Categoria = (props) => {
	const [categorias, setCategorias] = useState([])
	const [valuesEdit, setValuesEdit] = useState({})
	const columns = ["id", "nome"]

	const getCategorias = () => {
		CategoriaService.getAll()
			.then(res => setCategorias(res.data))
	}

	const resetState = () => {
		setValuesEdit({
			nome: ""
		})
	}

	const onExcluir = (param) => {
		CategoriaService.remove(param.id)
			.then((res) => {
				resetState()
				getCategorias()
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
		
		CategoriaService.save(values)
		.then((res) => {
			getCategorias()
			alert(res.data.msg || '')
		})
	}

	const onEdit = (values) => {
        if(!valuesEdit.nome){
            alert("Selecione um registro para editar!")
            return false
		}
		
		CategoriaService.update(values.id, {
			nome: values.nome || valuesEdit.nome
		})
		.then((res) => {
			resetState()
			getCategorias()
			alert(res.data.msg || '')
		})
	}

	useEffect(() => {
		getCategorias()
   }, [])

	return (
        <Layout>
            <Card>
                <FormCategoria data={valuesEdit} onSave={onSave} onEdit={onEdit}/>
                <hr/>
                <Grid columns={columns} data={categorias} onClickRow={onClickRow} excluir={onExcluir}/>
            </Card>
        </Layout>
	  )
}

export default Categoria
