import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventBG3D from '../Splines/EventBG3D'
import { AiFillDelete } from 'react-icons/ai'

const Cards = ({ name, eventArray, setEventArray }) => {
    const navigate = useNavigate();
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [val] = useMediaQuery('(max-width:1200px)');

    function deleteEventFromArray(e) {
        e.stopPropagation();
        setEventArray(eventArray.filter(item => item !== name))
    }


    return (
        <Flex mt={3}
            onMouseEnter={() => setDeleteVisible(true)}
            onMouseLeave={() => setDeleteVisible(false)}
            onClick={() => navigate(`/expense/${name}`)}
            fontWeight={900}
            pos={'relative'}
            id={'card-event'}
            backdropFilter={'blur(5px)'}
            textAlign={'center'}
            overflow={'clip'}
            display={'inline-block'}
            justifyContent={'center'}
            alignItems={'center'}
            w={200} h={250}
            borderRadius={10} cursor={'pointer'}>
            <EventBG3D />
            {(deleteVisible || val) && <AiFillDelete size={50}
                id='deleteIcons'
                onClick={deleteEventFromArray} />}
            {name}
        </Flex>
    )
}

export default Cards