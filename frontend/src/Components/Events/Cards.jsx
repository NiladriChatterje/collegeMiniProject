import { Box, color } from '@chakra-ui/react'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({ name }) => {
    const navigate = useNavigate();

    return (
        <Box mt={5}
            onClick={() => navigate(`/expense/${name}`)}
            fontWeight={900}
            id={'card-event'}
            textAlign={'center'}
            display={'inline-block'}
            w={200} h={250} bgColor={'gray.100'}
            borderRadius={10} cursor={'pointer'}>
            {name}
        </Box>
    )
}

export default Cards