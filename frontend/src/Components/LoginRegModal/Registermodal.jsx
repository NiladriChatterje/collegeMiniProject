import { Button, FormLabel, Image, Input } from '@chakra-ui/react'
import Register from '../../assets/Register.svg'
import { toast } from 'react-hot-toast'
import React, { useRef } from 'react'

const Registermodal = ({ setToggleLoginReg, validate, setValidate }) => {
    const [confirmation, setConfirmation] = React.useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const telRef = useRef();
    const passwordRef = useRef();

    function registrationUser(e) {
        e.preventDefault();
        setConfirmation(true);
        setTimeout(() => { setConfirmation(false); setToggleLoginReg(true) }, 2000)
        if (!(nameRef.current.value && emailRef.current.value && telRef.current.value && passwordRef.current.value)) {
            toast('Fill The required fields!!')
            return;
        }
    }

    return (
        <>
            <Image src={Register}
                transform={['scale(1.20)', 'scale(1.2)', 'scale(0.6)']}
                pos={'fixed'} zIndex={-5} />
            <form onSubmit={registrationUser}>
                <FormLabel>Name : </FormLabel>
                <Input type='text' ref={nameRef} />
                <FormLabel>email : </FormLabel>
                <Input type='email' ref={emailRef} />
                <FormLabel>Phone : </FormLabel>
                <Input type='tel' ref={telRef} maxLength={10} minLength={10} />
                <FormLabel>password : </FormLabel>
                <Input type='password' ref={passwordRef} />
                <Button type='submit' isLoading={confirmation} mt={5}
                    bg={'teal.700'} color={'white'} >Register</Button>
            </form>
        </>
    )
}

export default Registermodal