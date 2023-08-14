import { Flex } from '@chakra-ui/react'
import React from 'react'

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
        </Flex>
    )
}

export default ModalWrapper