import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventBG3D from '../Splines/EventBG3D'
import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'

const Cards = ({ name, userID, setNotifier }) => {
    const navigate = useNavigate();
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [val] = useMediaQuery('(max-width:1200px)');

    async function deleteEventFromArray(e) {
        e.stopPropagation();
        const { data } = await axios.post('http://localhost:8000/deleteEvent.php',
            JSON.stringify({ userID, status: name }));
        console.log(data);
        if (data == true)
            setNotifier(prev => !prev)
    }

    return (
        <Flex mt={3}
            onMouseEnter={() => setDeleteVisible(true)}
            onMouseLeave={() => setDeleteVisible(false)}
            onClick={() => navigate(`/expense/${name}`)}
            onTouchStart={() => navigate(`/expense/${name}`)}
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