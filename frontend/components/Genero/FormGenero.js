import React, { useState, useEffect }  from 'react'

import {
    FormGeneroStyle,
    InputText,
    Form,
    ButtonCadastrar,
    ButtonEditar
} from './FormGenero.style'

const FormGenero = (props) => {
    
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
            ...values,
        })
    }

    const onChange = (event) => {
        const obj = {
            ...values,
            ...props.data,
            [event.target.name]: event.target.value
        }
        setValues(obj)
    }

	return (

		<FormGeneroStyle>
            <Form>
                <h2>Generos</h2>
                
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
        </FormGeneroStyle>
	)
}

export default FormGenero