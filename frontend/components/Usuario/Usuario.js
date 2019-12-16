import React, { useState, useEffect }  from 'react'

import UsuarioService from '../../services/usuario';

import FormUsuario from './FormUsuario'
import Grid from '../Grid/Grid'
import Layout from '../Layout/Layout'
import Card from '../Card'

const Usuario = (props) => {
	const [usuarios, setUsuarios] = useState([])
	const [valuesEdit, setValuesEdit] = useState({})
	const columns = ["", "Nome", "Email"]

	const getUsuarios = () => {
		UsuarioService.getAll()
			.then(res => setUsuarios(res.data))
	}

	const onExcluir = (param) => {
		console.log("onExcluir", param)
	}

	const onClickRow = (param) => {
		console.log("param ", param)
		setValuesEdit({
			id: param.id,
			nome: param.nome,
			email: param.email
		})
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
        if(values.nome == "" || values.email == "" || values.senha == ""){
            alert("Para editar um registro clica sobre uma linha!")
            return false
		}
		
		UsuarioService.update(values)
		.then((res) => {
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
