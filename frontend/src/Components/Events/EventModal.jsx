import { Box, Button, Flex, FormLabel, Input, Image } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { toast } from 'react-hot-toast';
import Add2 from '../../assets/Add.svg'
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
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={10}
                flexDir={['column', 'column', 'row']}
                position={'relative'}
                w={['90%', '80%', 700]}
                h={[400, 500]}>

                <AiFillCloseCircle
                    onClick={() => setModalToggle(false)}
                    style={{ position: 'absolute', right: 5, top: 5, zIndex: 2 }} size={30}
                    cursor={'pointer'} />

                <Flex w={['85%', '85%', '48%']}
                    justifyContent={'center'}
                    bg={'linear-gradient(103.2deg, rgb(53, 108, 128) 14.6%, rgb(57, 187, 231) 91.5%)'}
                    boxShadow={'0 0 10px -5px black'}
                    p={10}
                    flexDir={'column'}
                    gap={5}
                    pos={'relative'}
                    borderRadius={10}
                >
                    <FormLabel color={'white'}>Event Name : </FormLabel>
                    <Input type='text' ref={inputRef} bg={'white'} required />
                    <Button variant={'solid'} bgColor={'teal.600'}
                        fontWeight={900} color={'white'}
                        onClick={addEvent}
                    >
                        ADD
                    </Button>
                </Flex>
                <Image src={Add2} alt=''
                    w={'50%'}
                    transform={['scale(1.5)', 'scale(1)']}
                    pos={'relative'}
                    objectFit={'contain'} />

            </Flex>
        </ModalWrapper>
    )
}

export default EventModal;
