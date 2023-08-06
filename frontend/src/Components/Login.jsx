import { Button, FormLabel, Input } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';


const Login = () => {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const { setName } = useContext(Context);

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
                <FormLabel>Username:</FormLabel>
                <Input type={'text'} ref={usernameRef} required />
                <FormLabel>Password:</FormLabel>
                <Input type={'password'} ref={passwordRef} required />
                <Button type={'submit'} variant={'solid'} ml={'38%'}
                    mt={10}
                    bg={'teal.800'}
                    color={'white'} >Submit</Button>
            </form>
        </>
    )
}

export default Login;