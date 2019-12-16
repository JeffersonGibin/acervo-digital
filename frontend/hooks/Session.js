import React, { useState, useEffect } from 'react';


/**
 * Função utilizada para verificar se o usuario está logado
 */
const useSession = () => {
    useEffect(() => {
        if(!sessionStorage.session){
            location = './login'
        }
	})
}

/**
 * Recupera informações que foram salvas ao efetuar login
 */
const getDataSession = () => {
    const [dataSession, setDataSession] = useState("");

	useEffect(() => {
        if(!dataSession){
            setDataSession(JSON.parse(sessionStorage.user_data))
        }
	})
    
    return dataSession
}

module.exports = {
    useSession,
    getDataSession
}
