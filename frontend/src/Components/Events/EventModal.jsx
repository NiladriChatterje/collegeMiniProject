import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { toast } from 'react-hot-toast';
import { ReactComponent as Add } from '../../assets/Add.svg'
import { AiFillCloseCircle } from 'react-icons/ai'

const EventModal = ({ setModalToggle, setEventArray, eventArray }) => {

    const inputRef = useRef();

    function addEvent() {
        if (inputRef.current.value) {
            setEventArray([...eventArray, inputRef.current.value]);
            setModalToggle(false);
            toast(inputRef.current.value + " event added");
        }
    }

    return (
        <Flex w={'full'}
            pos={'fixed'}
            left={0}
            zIndex={1}
            h={'full'}
            bgColor={'blackAlpha.500'}
            opacity={7} justifyContent={'center'}
            alignItems={'center'}>
            <Flex
                bgColor={'white'}
                overflow={'clip'}
                borderRadius={10}
                flexDir={'column'}
                position={'relative'}
                justifyContent={'center'}
                placeItems={'center'}
                w={600}
                h={500}>

                <AiFillCloseCircle
                    onClick={() => setModalToggle(false)}
                    style={{ position: 'absolute', right: 5, top: 5 }} size={30}
                    cursor={'pointer'} />

                <Add />

                <Box w={'50%'}
                    pos={'absolute'}
                    right={20}
                    top={5}
                    borderRadius={10} p={10}>
                    <FormLabel>Event Name : </FormLabel>
                    <Input type='text' ref={inputRef} required />
                </Box>
                <Button variant={'solid'} bgColor={'teal.600'} pos={'absolute'}
                    fontWeight={900} color={'white'}
                    bottom={10} right={14}
                    onClick={addEvent}
                >ADD</Button>
            </Flex>
        </Flex>
    )
}

export default EventModal;
