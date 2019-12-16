import React, { useState, useEffect }  from 'react'

import {
    FormUsuarioStyle,
    InputText,
    Form,
    ButtonCadastrar,
    ButtonEditar
} from './FormUsuario.style'

const FormUsuario = (props) => {
    
    const [values, setValues] = useState({
        nome: "",
        email: "",
        senha: ""
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

		<FormUsuarioStyle>
            <Form>
                <h2>Usuários</h2>
                
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
                    <InputText
                        name="email"
                        type="text"
                        placeholder="Email *"
                        maxlength="70"
                        onChange={(event) => onChange(event)}
                        value={values.email || props.data.email || ''}
                        
                     />
                </div>
                <div>
                    <InputText
                        name="senha"
                        type="password"
                        placeholder="Senha *"
                        maxlength="70"
                        onChange={(event) => onChange(event)}
                        value={values.senha || props.data.senha || ''}
                    />
                </div>
            
                <div>
                    <ButtonCadastrar onClick={onSave}>Cadastrar</ButtonCadastrar>
                    <ButtonEditar onClick={onEdit}>Editar</ButtonEditar>
                </div>
            </Form>
        </FormUsuarioStyle>
	)
}

export default FormUsuario