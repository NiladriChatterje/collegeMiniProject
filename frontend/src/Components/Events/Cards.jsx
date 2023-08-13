import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'

const Cards = ({ name, eventArray, setEventArray }) => {
    const navigate = useNavigate();
    const [deleteVisible, setDeleteVisible] = useState(false);

    function deleteEventFromArray(e) {
        e.stopPropagation();
        setEventArray(eventArray.filter(item => item !== name))
    }

    return (
        <Flex mt={5}
            onMouseEnter={() => setDeleteVisible(true)}
            onMouseLeave={() => setDeleteVisible(false)}
            onClick={() => navigate(`/expense/${name}`)}
            fontWeight={900}
            pos={'relative'}
            id={'card-event'}
            textAlign={'center'}
            display={'inline-block'}
            justifyContent={'center'}
            alignItems={'center'}
            w={200} h={250} bgColor={'gray.100'}
            borderRadius={10} cursor={'pointer'}>

            {deleteVisible && <AiFillDelete size={50}
                id='deleteIcons'
                onClick={deleteEventFromArray} />}
            {name}
            <Box w={'80%'} pos={'absolute'} bottom={5} borderRadius={10} h={2} bg={'blue.700'} />
        </Flex>
    )
}

export default Cards