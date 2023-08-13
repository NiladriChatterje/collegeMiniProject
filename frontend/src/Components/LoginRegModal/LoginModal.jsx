import { Button, FormLabel, Input } from '@chakra-ui/react'
import React, { useContext, useRef } from 'react';
import { ReactComponent as ExpenseLogo } from '../../assets/Background.svg'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';

const LoginModal = () => {

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


    React.useEffect(() => {
        const profilePic = document.querySelector('#Profile');
        const loginBg = document.querySelector('#loginBackground')
        profilePic.style.marginTop = '4%'
        loginBg.style.marginTop = '5%'
        profilePic.style.width = '250px';
        profilePic.style.height = profilePic.style.width;
        profilePic.style.position = 'static';

        return () => {
            profilePic.style.width = '80px';
            profilePic.style.marginTop = '2px'
            profilePic.style.height = profilePic.style.width;
            profilePic.style.position = 'fixed';
        }
    }, []);

    return (
        <>
            <ExpenseLogo id='loginBackground' />
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

export default LoginModal