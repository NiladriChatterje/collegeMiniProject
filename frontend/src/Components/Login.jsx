import { Button, Flex, FormLabel, Input } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';
import LoginModal from './LoginRegModal/LoginModal';


const Login = () => {
    const [loginRegToggle, setLoginRegToggle] = useState(true);
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
            <Flex
                pos={'fixed'}
                right={10}
                top={5}
                rowGap={25}
                flexDir={'column'}
            >
                <Button onClick={() => setLoginRegToggle(true)} >
                    Login
                </Button >
                <Button onClick={() => setLoginRegToggle(false)} >
                    Register
                </Button>
            </Flex>
            <form onSubmit={(e) => credentialLogin(e)}>
                {loginRegToggle ?
                    <LoginModal passwordRef={passwordRef}
                        usernameRef={usernameRef} /> :
                    <h1>Hello</h1>}
            </form>
        </>
    )
}

export default Login;