import React, { useState, useEffect }  from 'react'

import {
    FormCategoriaStyle,
    InputText,
    Form,
    ButtonCadastrar,
    ButtonEditar
} from './FormCategoria.style'

const FormCategoria = (props) => {
    
    const [values, setValues] = useState({
        nome: ""
    });

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


	return (

		<FormCategoriaStyle>
            <Form>
                <h2>Categorias</h2>
                
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
                    <ButtonCadastrar onClick={onSave}>Cadastrar</ButtonCadastrar>
                    <ButtonEditar onClick={onEdit}>Editar</ButtonEditar>
                </div>
            </Form>
        </FormCategoriaStyle>
	)
}

export default FormCategoria