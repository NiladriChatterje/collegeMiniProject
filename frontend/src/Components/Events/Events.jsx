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

    function renderLineChart() {
        var options = {
            series: [{
                name: 'series1',
                data: [31, 40, 28, 109]
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T01:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy'
                },
            },
        };
        var chart = new ApexCharts(document.querySelector("#LineChart"), options);
        chart.render();
    }
    function renderPieChart() {
        const options = {
            chart: {
                type: 'pie'
            },
            series: [44, 45, 55, 5, 55, 41, 17, 15],

        };

        const chart = new ApexCharts(document.querySelector("#PieChart"), options);
        chart.render();
    }

    useEffect(() => {
        renderLineChart();
        renderPieChart();

    }, []);

    if (name)
        return (
            <Flex w={['90%', '90%', '70%']}
                pos={'relative'}
                alignItems={'center'}
                justifyContent={['flex-start', 'flex-start', 'center']}
                flexDir={'column'}
                h={'full'}>

                <EventBG id={'eventBG'} />
                <nav>
                    <Text>{name}</Text>
                    <AiOutlinePlusSquare cursor={'pointer'} size={30}
                        onClick={() => setModalToggle(true)} />
                </nav>
                <Divider mt={90} />
                {modalToggle && <EventModal setModalToggle={setModalToggle}
                    setEventArray={setEventArray} eventArray={eventArray} />}


                <Flex
                    id={'eventCard'}
                    overflow={['clip']}
                    maxH={'100vh'}
                    h={['90vh', 'full']}
                    flexDir={['column', 'column', 'row']}
                    alignItems={['center', 'center', 'flex-start']}
                    justifyContent={['space-around', 'center', 'space-between', 'space-around']}
                    w={'full'}>
                    <Flex
                        gap={5}
                        p={'2px 0 10px 0'}
                        overflow={'clip auto'}
                        maxH={'88vh'}
                        pos={['fixed', 'fixed', 'static']}
                        flexDir={'column'}
                        alignItems={['center', 'center', 'flex-start']}
                        w={['85%', '80%', '35%']}>
                        <Box id={'LineChart'} className='charts' />
                        <Box id={'PieChart'} className='charts' />

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
                        backdropFilter={['blur(10px)', 'blur(10px)', 'blur(0px)']}
                        borderRadius={10}
                        pt={[10, 10, 0]}
                        boxShadow={['0 0 10px -5px black', '0 0 10px -5px black', 'none']}
                        pos={['absolute', 'absolute', 'relative']}
                        justifyContent={'center'}
                        w={['full', 'full', 'full', '70%']}
                        flexWrap={'wrap'}
                        zIndex={[11, 11, 0]}
                        h={['full', 'full', 700]}
                        top={['97vh', '97vh', '0vh']}
                        columnGap={5}>

                        {eventArray.length === 0 ?
                            <>
                                <Text>No Expenses Added</Text>
                                <NotFound id='NotFound' />
                            </>
                            :
                            eventArray.map((item, i) => <Cards key={i} name={item}
                                setEventArray={setEventArray}
                                eventArray={eventArray} />)}
                    </Flex>
                </Flex>
            </Flex>
        );
    return <Navigate to={'/'} />
}

export default Events