import { Button, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const LoginModal = ({ passwordRef, usernameRef }) => {
    return (
        <>
            <FormLabel>Username:</FormLabel>
            <Input type={'text'} ref={usernameRef} required />
            <FormLabel>Password:</FormLabel>
            <Input type={'password'} ref={passwordRef} required />
            <Button type={'submit'} variant={'solid'} ml={'38%'}
                mt={10}
                bg={'teal.800'}
                color={'white'} >Submit</Button>
        </>
    )
}

export default LoginModal