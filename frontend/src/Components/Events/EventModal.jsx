import { Box, Button, Flex, FormLabel, Input, Image } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { toast } from 'react-hot-toast';
import ModalImg from '../../assets/ModalImg.jpg'
import { AiFillCloseCircle } from 'react-icons/ai'

const EventModal = ({ setModalToggle, setEventArray, eventArray }) => {

    const inputRef = useRef();

    function addEvent() {
        setEventArray([...eventArray, inputRef.current.value]);
        setModalToggle(false);
        toast(inputRef.current.value + "event added");
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
                bgColor={'whiteAlpha.900'}
                overflow={'clip'}
                boxShadow={'0 0 20px -12px black'}
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

                <Image src={ModalImg} objectFit={'contain'} />
                <Box w={'70%'} pos={'absolute'} zIndex={3} bg={'whiteAlpha.900'}
                    boxShadow={'0 0 10px -5px black'}
                    borderRadius={20} p={10} >
                    <FormLabel>Event Name : </FormLabel>
                    <Input type='text' ref={inputRef} required />
                </Box>
                <Button variant={'solid'} bgColor={'teal.600'} pos={'absolute'}
                    fontWeight={900} color={'white'}
                    bottom={10} right={10}
                    onClick={addEvent}
                >ADD</Button>
            </Flex>
        </Flex>
    )
}

export default EventModal;
