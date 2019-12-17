import React, { useState, useEffect }  from 'react'

import MidiaService from '../../services/midia';

import FormMidia from './FormMidia'
import Grid from '../Grid/Grid'
import Layout from '../Layout/Layout'
import Card from '../Card'

const Midia = (props) => {
	const [midias, setMidias] = useState([])
	const [valuesEdit, setValuesEdit] = useState({})
	const columns = ["id", "nome", "categoria", "genero"]

	const getMidias = () => {
		MidiaService.getAll()
			.then((res) => {
				setMidias(res.data.map((item, key) => {
					return {
						id: item.id,
						nome: item.nome,
						categoria: item.categoria,
						genero: item.genero,
						categoriaid: item.categoriaid,
						generoid: item.generoid,
						descricao: item.descricao
					}
				}))
			})
	}

	const onExcluir = (param) => {
		MidiaService.remove(param.id)
			.then((res) => {
				getMidias()
				alert(res.data.msg || '')
			})
	}

	const onClickRow = (param) => {
		setValuesEdit(param)
	}

	const onSave = (values) => {
        if(!values.nome || !values.categoriaid || !values.generoid){
            alert("Preencha os campos antes de cadastrar!")
            return false
		}
		values.destaque = false;
		MidiaService.save(values)
		.then((res) => {
			getMidias()
			alert(res.data.msg || '')
		})
	}

	const onEdit = (values) => {
        if(!valuesEdit.nome || !valuesEdit.categoriaid || !valuesEdit.generoid){
            alert("Selecione um registro para editar!")
            return false
		}
		
		MidiaService.update(values.id, values.generoid, {
			nome: values.nome,
			descricao: values.descricao || '',
			generoid: values.generoid,
			categoriaid: values.categoriaid,
			destaque: false
		})
		.then((res) => {
			getMidias()
			alert(res.data.msg || '')
		})
	}

	useEffect(() => {
		getMidias()
   }, [])

	return (
        <Layout>
            <Card>
                <FormMidia data={valuesEdit} onSave={onSave} onEdit={onEdit}/>
                <hr/>
                <Grid columns={columns} data={midias} onClickRow={onClickRow} excluir={onExcluir}/>
            </Card>
        </Layout>
	  )
}

export default Midia
