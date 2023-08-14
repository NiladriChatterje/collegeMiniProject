import { Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import ModalWrapper from '../ModalWrapper'
import React, { useContext, useRef, useState } from 'react';
import { ReactComponent as ExpenseLogo } from '../../assets/Background.svg'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';
import { toast } from 'react-hot-toast';
import axios from 'axios'

const LoginModal = () => {
    const [Validate, setValidate] = useState(false);
    const [OTP, setOTP] = useState(-1);
    const navigate = useNavigate();
    const ValidateRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const { setName } = useContext(Context);

    async function credentialLogin(e) {
        e.preventDefault();
        let OTP = Math.trunc((Math.random() * 1000000));

        setValidate(true);
        await axios.post('http://localhost:5000/send_email', {
            recipient: usernameRef.current.value,
            confirmation: OTP
        });
        toast('OTP sent')
        setOTP(OTP);
        setName(usernameRef.current.value)
    }


    function validateModal() {
        if (OTP === parseInt(ValidateRef.current.value)) {
            setValidate(false);
            toast('Successfully OTP verified');
            navigate('/events');
        }
        else {
            toast('wrong credential')
        }
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
                <Input type={'email'} ref={usernameRef} required />
                <FormLabel>Password:</FormLabel>
                <Input type={'password'} ref={passwordRef} required />
                <Button type={'submit'} variant={'solid'} ml={'38%'}
                    mt={10}
                    bg={'teal.800'}
                    color={'white'} >Submit</Button>
            </form>
            {Validate &&
                <ModalWrapper>
                    <FormLabel>OTP :</FormLabel>
                    <Input type='number' ref={ValidateRef} required />
                    <Button
                        variant={'solid'}
                        bg={'teal.600'}
                        color={'white'}
                        onClick={validateModal}>
                        CHECK
                    </Button>
                </ModalWrapper>
            }
        </>
    )
}

export default LoginModal