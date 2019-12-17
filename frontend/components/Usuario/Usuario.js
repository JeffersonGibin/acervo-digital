import React, { useState, useEffect }  from 'react'

import UsuarioService from '../../services/usuario';

import FormUsuario from './FormUsuario'
import Grid from '../Grid/Grid'
import Layout from '../Layout/Layout'
import Card from '../Card'

const Usuario = (props) => {
	const [usuarios, setUsuarios] = useState([])
	const [valuesEdit, setValuesEdit] = useState({})
	const columns = ["id", "nome", "email"]

	const getUsuarios = () => {
		UsuarioService.getAll()
			.then(res => setUsuarios(res.data))
	}

	const resetState = () => {
		setValuesEdit({
			nome: "",
			email: ""
		})
	}

	const onExcluir = (param) => {
		UsuarioService.remove(param.id)
			.then((res) => {
				resetState()
				getUsuarios()
				alert(res.data.msg || '')
			})
	}

	const onClickRow = (param) => {
		setValuesEdit(param)
	}

	const onSave = (values) => {
        if(values.nome == "" || values.email == "" || values.senha == ""){
            alert("Preencha os campos antes de cadastrar!")
            return false
		}
		
		UsuarioService.save(values)
		.then((res) => {
			getUsuarios()
			alert(res.data.msg || '')
		})
	}

	const onEdit = (values) => {
        if(!valuesEdit.nome || !valuesEdit.email){
            alert("Selecione um registro para editar!")
            return false
		}
		
		UsuarioService.update(values.id, {
			nome: values.nome || valuesEdit.nome,
			email: values.email || valuesEdit.email
		})
		.then((res) => {
			resetState()
			getUsuarios()
			alert(res.data.msg || '')
		})
	}

	useEffect(() => {
		getUsuarios()
   }, [])

	return (
        <Layout>
            <Card>
                <FormUsuario data={valuesEdit} onSave={onSave} onEdit={onEdit}/>
                <hr/>
                <Grid columns={columns} data={usuarios} onClickRow={onClickRow} excluir={onExcluir}/>
            </Card>
        </Layout>
	  )
}

export default Usuario
