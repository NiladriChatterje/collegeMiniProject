import { Button, FormLabel, Input } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';


const Login = () => {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const { setName, name } = useContext(Context);

    function credentialLogin(e) {
        e.preventDefault();
        //DB work
        setName(usernameRef.current.value)
        navigate('/events');
    }

    useEffect(() => {
        const profilePic = document.querySelector('#Profile');
        profilePic.style.width = '250px';
        profilePic.style.height = profilePic.style.width;
        profilePic.style.position = 'static';

        return () => {
            profilePic.style.width = '80px';
            profilePic.style.height = profilePic.style.width;
            profilePic.style.position = 'fixed';
        }
    }, []);

    return (
        <>
            <form onSubmit={(e) => credentialLogin(e)}>

            </form>
        </>
    )
}

export default Login;