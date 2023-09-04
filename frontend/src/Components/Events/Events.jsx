import { Text, Box, Divider, Flex } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import { ReactComponent as EventBG } from '../../assets/EventBG.svg'
import { AiOutlinePlusSquare } from 'react-icons/ai';
import Cards from './Cards';
import ApexCharts from 'apexcharts'
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

    useEffect(() => {
        const options = {
            chart: {
                type: 'pie'
            },
            series: [44, 45, 55, 5, 55, 41, 17, 15],

        };

        const chart = new ApexCharts(document.querySelector("#Chart"), options);
        chart.render();


    }, []);

    if (name)
        return (
            <Flex w={'70%'}
                pos={'relative'}
                alignItems={'center'}
                flexDir={'column'}
                h={'full'}>

                <EventBG id={'eventBG'} />
                <nav>
                    <Text>{name}</Text>
                    <AiOutlinePlusSquare cursor={'pointer'} size={30}
                        onClick={() => setModalToggle(true)} />
                </nav>
                {modalToggle && <EventModal setModalToggle={setModalToggle}
                    setEventArray={setEventArray} eventArray={eventArray} />}


                <Divider mt={100} />
                <Flex
                    id={'eventCard'}
                    maxH={'100vh'}
                    h={'full'}
                    flexDir={['column', 'column', 'column', 'row']}
                    justifyContent={['space-around', 'center', 'space-between', 'space-around']}
                    w={'full'}>
                    <Flex
                        gap={5}
                        alignItems={['center', 'flex-start']}
                        flexDir={'column'}
                        w={['full', 'full', 'full', '30%']}>
                        <Box id={'Chart'} minW={320} />
                        <Box w={'full'} h={30}
                            borderRadius={10} bg={'blue.900'} />

                        <Box borderRadius={10}
                            p={5}
                            boxShadow={'0 0 25px -18px black'}
                            bg={'whiteAlpha.900'}
                            textAlign={'center'}
                            color={'white'}
                            bgImg={'linear-gradient(to right,#37d5d6,#36096D)'}
                            w={'full'} h={['max-content', 'max-content', 'max-content', 60]}>
                            Total Expenses : $4500
                        </Box>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        w={['full', 'full', 'full', '70%']}
                        flexWrap={'wrap'}
                        h={['35%', '50%', 700]}
                        mt={5}
                        paddingBottom={[20,5]}
                        columnGap={5}
                        overflow={'clip auto'}>

                        {eventArray.length === 0 ?
                            <>
                                <Text>No Expenses Added</Text>
                                <NotFound id='NotFound' />
                            </>
                            :
                            eventArray.map(item => <Cards name={item}
                                setEventArray={setEventArray}
                                eventArray={eventArray} />)}
                    </Flex>
                </Flex>
            </Flex>
        );
    return <Navigate to={'/'} />
}

export default Events