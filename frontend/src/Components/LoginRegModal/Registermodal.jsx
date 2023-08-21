import { Button, FormLabel, Input } from '@chakra-ui/react'
import { ReactComponent as Register } from '../../assets/Register.svg'
import { toast } from 'react-hot-toast'
import React, { useRef } from 'react'

const Registermodal = ({ setToggleLoginReg }) => {
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
            <Register id={'loginBackground'} />
            <form onSubmit={registrationUser}>
                <FormLabel>Name : </FormLabel>
                <Input type='text' ref={nameRef} />
                <FormLabel>email : </FormLabel>
                <Input type='email' ref={emailRef} />
                <FormLabel>Phone : </FormLabel>
                <Input type='tel' ref={telRef} maxLength={10} minLength={10} />
                <FormLabel>password : </FormLabel>
                <Input type='password' ref={passwordRef} />
                <Button type='submit' isLoading={confirmation}
                    bg={'teal.700'} color={'white'} >Register</Button>
            </form>
        </>
    )
}

export default Registermodal