import { Text, Box, Divider, Flex } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import { AiOutlinePlusSquare } from 'react-icons/ai';
import Cards from './Cards';
import { ReactComponent as NotFound } from '../../assets/NotFound.svg'
import EventModal from './EventModal';
import { Navigate } from 'react-router-dom'


const Events = () => {
    const [eventArray, setEventArray] = useState(() => JSON.parse(localStorage.getItem('events')) || []);
    const [modalToggle, setModalToggle] = useState(() => false)
    const { name } = useContext(Context);

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(eventArray));
    }, [eventArray]);

    if (name)
        return (
            <Box w={'70%'}
                pos={'relative'}
                h={'100vh'}>
                <nav>
                    <Text>{name}</Text>
                    <AiOutlinePlusSquare cursor={'pointer'} size={30}
                        onClick={() => setModalToggle(true)} />
                </nav>
                {modalToggle && <EventModal setModalToggle={setModalToggle}
                    setEventArray={setEventArray} eventArray={eventArray} />}

                <Divider mt={100} />

                <Flex
                    justifyContent={'center'}
                    w={'full'}
                    pos={'absolute'}
                    flexWrap={'wrap'}
                    h={'80%'}
                    columnGap={5}
                    overflow={'clip auto'}>

                    {eventArray.length === 0 ? <>
                        <Text>No Expenses Added</Text>
                        <NotFound id='NotFound' />
                    </>
                        :
                        eventArray.map(item => <Cards name={item}
                            setEventArray={setEventArray}
                            eventArray={eventArray} />)}
                </Flex>
            </Box>
        );
    return <Navigate to={'/'} />
}

export default Events