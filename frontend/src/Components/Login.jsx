import React from 'react'
import { LoginModal, RegisterModal } from './LoginRegModal';
import BG from '../assets/BG.svg'
import BG2 from '../assets/BG2.svg'
import { Context } from '../App';
import { Button, Flex, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [toggleLoginReg, setToggleLoginReg] = React.useState(true);
    const { setName, name } = React.useContext(Context);
    const [validate, setValidate] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        const profilePic = document.querySelector('#Profile');
        profilePic.style.marginTop = '4%'
        profilePic.style.width = '200px';
        profilePic.style.height = profilePic.style.width;
        profilePic.style.position = 'static';
        if (name)
            navigate('/events');
        return () => {
            profilePic.style.position = 'fixed';
            profilePic.style.width = '50px';
            profilePic.style.height = profilePic.style.width;
            profilePic.style.marginTop = '2px'
            profilePic.style.top = '5px'
        }
    }, []);

    return (
        <>
            <Image src={window.innerWidth > 1200 ? BG : BG2} id={'BG'} />
            {toggleLoginReg ?
                <LoginModal setName={setName} validate={validate} setValidate={setValidate} /> :
                <RegisterModal setToggleLoginReg={setToggleLoginReg}
                    validate={validate} setValidate={setValidate} />}
            <Flex
                w={'full'}
                mt={10}
                mb={20}
                justifyContent={'center'}
                h={'max-content'}>
                <Button
                    fontWeight={900}
                    color={'white'}
                    p={5}
                    mr={5}
                    onClick={() => setToggleLoginReg(true)}
                    bg={toggleLoginReg ? 'teal.900' : 'gray.300'}>
                    Sign In
                </Button>

                <Button
                    fontWeight={900}
                    color={'white'}
                    p={5}
                    onClick={() => setToggleLoginReg(false)}
                    bg={toggleLoginReg ? 'gray.300' : 'teal.900'}>
                    REGISTER
                </Button>

            </Flex>
        </>
    )
};

export default Login;