import { Text, Box, Divider, Flex } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Context } from '../../App'
import { AiOutlinePlusSquare } from 'react-icons/ai';
import Cards from './Cards';
import EventModal from './EventModal';


const Events = () => {
    const [eventArray, setEventArray] = useState(() => ['Restaurants', 'Transport', 'Market', 'Maintainance']);
    const [modalToggle, setModalToggle] = useState(() => false)
    const { name } = useContext(Context);
    return (
        <Box w={'70%'}>
            <nav>
                <Text>{name}</Text>
                <AiOutlinePlusSquare cursor={'pointer'} size={30}
                    onClick={() => setModalToggle(true)} />
            </nav>
            {modalToggle && <EventModal setModalToggle={setModalToggle}
                setEventArray={setEventArray} eventArray={eventArray} />}
            <Divider mt={100} />
            <Flex justifyContent={'center'} flexWrap={'wrap'} zIndex={-6} columnGap={5} overflowX={'clip'} overflowY={'auto'}>
                {eventArray.map(item => <Cards name={item} />)}
            </Flex>
        </Box>
    );
}

export default Events