import { Text, Box, Divider, Flex, Image } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { RiSearchEyeLine } from 'react-icons/ri'
import Cards from './Cards';
import NoFound from '../../assets/noFound.jpg'
import EventModal from './EventModal';


const Events = () => {
    const [eventArray, setEventArray] = useState(() => JSON.parse(localStorage.getItem('events')) || []);
    const [modalToggle, setModalToggle] = useState(() => false)
    const { name } = useContext(Context);

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(eventArray));
    }, [eventArray]);

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
                {eventArray.length === 0 ?
                    <Image src={NoFound} w={300} />
                    :
                    eventArray.map(item => <Cards name={item}
                        setEventArray={setEventArray}
                        eventArray={eventArray} />)}
            </Flex>
        </Box>
    );
}

export default Events