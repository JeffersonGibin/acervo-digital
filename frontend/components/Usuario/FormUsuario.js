import React, { useState, useEffect }  from 'react'

import {
    FormUsuarioStyle,
    InputText,
    Form,
    ButtonCadastrar,
    ButtonLimpar
} from './FormUsuario.style'

const FormUsuario = (props) => {
    
    const [values, setValues] = useState({
        nome: props.data.nome,
        email: "",
        senha: ""
    });

    const onSave = (event) => {
        event.preventDefault();
        props.onSave(values)
    }
    
    const onEdit = (event) => {
        event.preventDefault();
        props.onEdit(values)
    }

    const onChange = (event) => {
        const obj = {
            ...values,
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
                        value={values.nome}
                        onChange={(event) => onChange(event)}
                    />
                </div>
                <div>
                    <InputText
                        name="email"
                        type="text"
                        placeholder="Email *"
                        maxlength="70"
                        onChange={(event) => onChange(event)}
                     />
                </div>
                <div>
                    <InputText
                        name="senha"
                        type="password"
                        placeholder="Senha *"
                        maxlength="70"
                        onChange={(event) => onChange(event)}
                    />
                </div>
            
                <div>
                    <ButtonCadastrar onClick={onSave}>Cadastrar</ButtonCadastrar>
                    <ButtonLimpar onClick={onEdit}>Editar</ButtonLimpar>
                </div>
            </Form>
        </FormUsuarioStyle>
	)
}

export default FormUsuario