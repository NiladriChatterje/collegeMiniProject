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
            series: [44, 55, 41, 17, 15],
            chartOptions: {
                labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
            }
        };

        const chart = new ApexCharts(document.querySelector("#Chart"), options);
        chart.render();

        return () => chart.destroy();
    }, []);

    if (name)
        return (
            <Box w={'70%'}
                pos={'relative'}
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
                    pos={'relative'}
                    h={'full'}
                    justifyContent={'space-between'}
                    w={'full'}>
                    <Flex
                        alignItems={['center', 'flex-start']}
                        flexDir={'column'}
                        w={['full', '30%']}>
                        <Box id={'Chart'} minW={320} />
                        <Box w={'full'} h={50} borderRadius={10} bg={'blue.900'} />
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        alignItems={['center', 'flex-start']}
                        w={['full', '70%']}
                        pos={'absolute'}
                        right={0}
                        flexWrap={'wrap'}
                        h={['55%', '80%']}
                        columnGap={5}
                        mt={[10, 0]}
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
            </Box>
        );
    return <Navigate to={'/'} />
}

export default Events