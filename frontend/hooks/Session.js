import React, { useState, useEffect } from 'react';

const useSession = () => {
    useEffect(() => {
        if(!sessionStorage.session){
            location = './login'
        }
	})
}

const dataSession = () => {
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
    dataSession
}
