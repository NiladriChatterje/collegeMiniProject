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
            <FormControl bg={'white'} w={'50%'}>
                <FormLabel>Date & Time</FormLabel>
                <Input type='datetime-local' required />
                <FormLabel>Description</FormLabel>
                <Input type='text' required />
                <FormLabel>Amount</FormLabel>
                <Input type='number' required />
                <Button onClick={() => setRecordAdder(false)}>Close</Button>
            </FormControl>
        </Flex>
    )
}

export default RecordAdderModal