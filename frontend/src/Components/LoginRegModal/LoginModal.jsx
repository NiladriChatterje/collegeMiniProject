import { Button, Flex, FormLabel, Input, Image } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import ExpenseLogo from '../../assets/Background.svg'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios'
import ModalWrapper from '../ModalWrapper';

const LoginModal = ({ setName }) => {
    const [Validate, setValidate] = useState(false);
    const [OTP, setOTP] = useState(-1);
    const navigate = useNavigate();
    const ValidateRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();



    async function credentialLogin(e) {
        e.preventDefault();
        if (!(usernameRef.current.value && passwordRef.current.value)) {
            toast('Please Fill the fields'); return;
        }
        let OTP = Math.trunc((Math.random() * 1000000));
        setValidate(true);
        /*await axios.post('http://localhost:5000/send_email', {
            recipient: usernameRef.current.value,
            confirmation: OTP
        });*/
        toast('OTP sent')
        setOTP(OTP);
        setName(usernameRef.current.value)
    }


    function validateModal() {
        toast(OTP)
        if (OTP === parseInt(ValidateRef.current.value)) {
            setValidate(false);
            toast('Successfully OTP verified');
            navigate('/events');
        }
        else
            toast('wrong credential')

    }

    return (
        <>
            <Image src={ExpenseLogo}
                objectFit={'contain'} transform={['scale(1.20)', 'scale(1.2)', 'scale(0.6)']}
                pos={'fixed'} zIndex={-5}
            />
            <form onSubmit={(e) => credentialLogin(e)}>
                <FormLabel>Username:</FormLabel>
                <Input type={'email'} ref={usernameRef} />
                <FormLabel>Password:</FormLabel>
                <Input type={'password'} ref={passwordRef} />
                <Button type={'submit'} variant={'solid'} ml={'38%'}
                    mt={10}
                    bg={'teal.800'}
                    color={'white'} >Submit</Button>
            </form>

            {Validate &&
                <ModalWrapper>
                    <Flex
                        w={'max-content'}
                        p={10}
                        bg={'whiteAlpha.900'}
                        rowGap={2}
                        flexDir={'column'}
                        justifyContent={'center'}
                        rounded={10}>

                        <FormLabel>OTP :</FormLabel>
                        <Input type='number' ref={ValidateRef} required />
                        <Button
                            variant={'solid'}
                            bg={'teal.600'}
                            color={'white'}
                            onClick={validateModal}>
                            CHECK
                        </Button>
                    </Flex>

                </ModalWrapper>}
        </>
    )
}

export default LoginModal