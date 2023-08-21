import React from 'react'
import { LoginModal, RegisterModal } from './LoginRegModal';
import BG from '../assets/BG.svg'
import BG2 from '../assets/BG2.svg'
import { Context } from '../App';
import { Button, Flex, Image } from '@chakra-ui/react';

const Login = () => {
    const [toggleLoginReg, setToggleLoginReg] = React.useState(true);
    const { setName } = React.useContext(Context);

    React.useEffect(() => {
        const profilePic = document.querySelector('#Profile');
        const loginBg = document.querySelector('#loginBackground')
        profilePic.style.marginTop = '4%'
        loginBg.style.marginTop = '5%'
        profilePic.style.width = '200px';
        profilePic.style.height = profilePic.style.width;
        profilePic.style.position = 'static';

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
                <LoginModal setName={setName} /> :
                <RegisterModal setToggleLoginReg={setToggleLoginReg} />}
            <Flex
                w={'full'}
                mt={10}
                mb={20}
                justifyContent={'center'}
                h={'max-content'}>
                <Button
                    w={10} h={10}
                    mr={5}
                    borderRadius={'50%'}
                    onClick={() => setToggleLoginReg(true)}
                    bg={toggleLoginReg ? 'teal.900' : 'gray.300'} />

                <Button
                    w={10} h={10}
                    borderRadius={'50%'}
                    onClick={() => setToggleLoginReg(false)}
                    bg={toggleLoginReg ? 'gray.300' : 'teal.900'} />

            </Flex>
        </>
    )
}

export default Login;