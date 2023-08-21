import { Box, Button, Flex, FormLabel, Input, Image } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { toast } from 'react-hot-toast';
import { ReactComponent as Add } from '../../assets/Add.svg'
import { AiFillCloseCircle } from 'react-icons/ai'
import ModalWrapper from '../ModalWrapper';


const EventModal = ({ setModalToggle, setEventArray, eventArray }) => {

    const inputRef = useRef();

    function addEvent() {
        if (inputRef.current.value) {
            setEventArray([...eventArray, inputRef.current.value]);
            setModalToggle(false);
            toast(inputRef.current.value + " event added"); return;
        }
        toast('Add Event in the field');
    }

    return (
        <ModalWrapper>
            <Flex
                bgColor={'white'}
                overflow={'clip'}
                borderRadius={10}
                flexDir={'column'}
                position={'relative'}
                w={[320, '80%', 600]}
                h={500}>

                <AiFillCloseCircle
                    onClick={() => setModalToggle(false)}
                    style={{ position: 'absolute', right: 5, top: 5, zIndex: 2 }} size={30}
                    cursor={'pointer'} />

                <Add id='EventSVGStyle' />

                <Box w={['48%', '40%']}
                    pos={'absolute'}
                    right={['10%', '15%']}
                    zIndex={5}
                    top={[20, 14]}
                    borderRadius={10}
                >
                    <FormLabel>Event Name : </FormLabel>
                    <Input type='text' ref={inputRef} required />
                </Box>
                <Button variant={'solid'} bgColor={'teal.600'} pos={'absolute'}
                    fontWeight={900} color={'white'}
                    bottom={[14, 12]} right={[10, 20]}
                    onClick={addEvent}
                >ADD</Button>
            </Flex>
        </ModalWrapper>
    )
}

export default EventModal;
