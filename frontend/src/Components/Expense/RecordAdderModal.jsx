import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { toast } from 'react-hot-toast';
import { IoMdCloseCircle } from 'react-icons/io'

const RecordAdderModal = ({ setRecordAdder, setEventDetailsArray, eventDetailsArray }) => {

    const timestampRef = useRef();
    const descRef = useRef();
    const amtRef = useRef();


    async function addTupleOfAnEvent() {
        if (!(timestampRef.current.value && descRef.current.value && amtRef.current.value)) {
            toast('All Fields are not filled yet!');
            return;
        }
        setEventDetailsArray([...eventDetailsArray, { timestamp: timestampRef.current.value, description: descRef.current.value, amount: amtRef.current.value }])
        toast("Record Added")
    }

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
            <FormControl
                bg={'white'} w={['85%', '82%', '40%']}
                rounded={10} p={5}>
                <Flex alignItems={'center'}
                    justifyContent={'space-between'}>
                    <FormLabel>Date & Time</FormLabel>
                    <IoMdCloseCircle
                        cursor={'pointer'}
                        onClick={() => setRecordAdder(false)} />
                </Flex>
                <Input type='datetime-local' ref={timestampRef} required />
                <FormLabel>Description</FormLabel>
                <Input type='text' ref={descRef} required />
                <FormLabel>Amount</FormLabel>
                <Input ref={amtRef} type='number' required />
                <Button
                    onClick={addTupleOfAnEvent}
                    mt={5}
                    color={'white'}
                    fontWeight={900}
                    bg={'teal.600'}
                >ADD</Button>
            </FormControl>
        </Flex>
    )
}

export default RecordAdderModal