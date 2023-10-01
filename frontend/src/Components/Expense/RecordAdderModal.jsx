import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const RecordAdderModal = ({ setRecordAdder }) => {
    return (
        <Flex

            w={'full'}
            h={'full'}
            pos={'fixed'}
            left={0}
            top={0}
            zIndex={1}
            bgColor={'blackAlpha.900'}
            justifyContent={'center'}
            alignItems={'center'}>
            <FormControl bg={'white'}>
                <FormLabel>Date & Time</FormLabel>
                <Input type='datetime-local' />
                <Button onClick={() => setRecordAdder(false)}>Close</Button>
            </FormControl>
        </Flex>
    )
}

export default RecordAdderModal