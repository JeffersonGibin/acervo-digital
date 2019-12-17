import React, { useState, useEffect }  from 'react'

import {
    FormMidiaStyle,
    InputText,
    Form,
    ButtonCadastrar,
    ButtonEditar,
    InputSelectCategoria,
    InputSelectGenero,
    Descricao
} from './FormMidia.style'

import CategoriaService from '../../services/categoria';
import GeneroService from '../../services/genero';


const FormMidia = (props) => {
    const [categorias, setCategorias] = useState([])
    const [generos, setGeneros] = useState([])
    const [values, setValues] = useState({});

    const getCategorias =  async() => {
        await CategoriaService.getAll()
            .then(res => setCategorias(res.data))
    }

    const getGeneros =  async() => {
        await GeneroService.getAll()
            .then(res => setGeneros(res.data))
    }

    const onSave = (event) => {
        event.preventDefault();
        props.onSave(values)
    }
    
    const onEdit = (event) => {
        event.preventDefault();
        props.onEdit({
            ...props.data,
            ...values
        })
        setValues({})
    }

    const onChange = (event) => {
        setValues({
            ...props.data,
            ...values,
            [event.target.name]: event.target.value
        })
    }

	useEffect(() => {
        getCategorias()
        getGeneros()
    }, [])

	return (
		<FormMidiaStyle>
            <Form>
                <h2>Midias</h2>
                
                <div>
                    <InputText 
                        name="nome" 
                        type="text" 
                        placeholder="Nome *"
                        maxlength="70"
                        onChange={(event) => onChange(event)}
                        value={values.nome || props.data.nome || ''}
                    />
                </div>
                <div>
                    <Descricao name="descricao" placeholder="Descrição" onChange={(event) => onChange(event)}
                        value={values.descricao || props.data.descricao || ''}
                    />
                </div>
                <div>
                    <InputSelectCategoria
                        name="categoriaid" 
                        onChange={(event) => onChange(event)} 
                        value={values.categoriaid || props.data.categoriaid || ''}>
                        <option> -- Selecione uma Categoria --</option>
                        {
                           categorias.map((item, index) => (
                                <option key={index} value={item.id} > {item.nome}</option>
                            ))
                        }
                    </InputSelectCategoria>
                </div>
                <div>
                    <InputSelectGenero
                        name="generoid" 
                        onChange={(event) => onChange(event)} 
                        value={values.generoid || props.data.generoid || ''}>
                        <option> -- Selecione um Genêro --</option>
                        {
                           generos.map((item, index) => (
                                <option key={index} value={item.id}> {item.nome}</option>
                            ))
                        }
                    </InputSelectGenero>
                </div>
            
                <div>
                    <ButtonCadastrar onClick={onSave}>Cadastrar</ButtonCadastrar>
                    <ButtonEditar onClick={onEdit}>Editar</ButtonEditar>
                </div>
            </Form>
        </FormMidiaStyle>
	)
}

export default FormMidia