import { Flex } from '@chakra-ui/react'
import React from 'react'

<<<<<<< HEAD
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
=======
const ModalWrapper = ({ bgImg, children, w, h }) => {
    return (
        <Flex
            pos={'fixed'}
            w='full'
            zIndex={2}
            h='full'
            bg={'blackAlpha.500'}
            justifyContent={'center'}
            alignItems={'center'}>

            <Flex
                flexDir={'column'}
                bgImg={bgImg || ''}
                p={20}
                w={w || 'max-content'}
                h={h || 'max-content'}
                rowGap={5}
                boxShadow={'0 0 25px -10px black'}
                bg={'whiteAlpha.900'}
                borderRadius={10}>
                {children}
            </Flex>
>>>>>>> 6d2751775e90d59b640e4a8096b86811f8d98124
        </Flex>
    )
}

export default ModalWrapper