import { Flex } from '@chakra-ui/react'
import React from 'react'

const ModalWrapper = ({ children }) => {
    return (
        <Flex w={'full'}
            pos={'fixed'}
            left={0}
            zIndex={1}
            h={'full'}
            backdropFilter={'blur(5px)'}
            bgColor={'blackAlpha.500'}
            opacity={7}
            justifyContent={'center'}
            alignItems={'center'}>
            {children}
        </Flex>
    )
}

export default ModalWrapper