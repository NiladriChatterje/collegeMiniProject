import { Text, Box, Divider, Flex, Button, Image } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import { ReactComponent as EventBG } from '../../assets/EventBG.svg'
import { AiOutlinePlusSquare } from 'react-icons/ai';
import Cards from './Cards';
import ExpenseIMG from '../../assets/ExpenseIMG.svg'
import ApexCharts from 'apexcharts'
import { ReactComponent as NotFound } from '../../assets/NotFound.svg'
import EventModal from './EventModal';
import { Navigate } from 'react-router-dom'
import axios from 'axios';

const Events = () => {
    const [eventArray, setEventArray] = useState(() => []);
    const [DatasPie, setDatasPie] = useState(() => []);
    const [AreaData, setAreaData] = useState(() => []);
    const [AreaLabel, setAreaLabel] = useState(() => []);
    const [notifier, setNotifier] = useState(() => true);

    const [modalToggle, setModalToggle] = useState(() => false);

    const [budget, setBudget] = useState(() => 4500);
    const [totalExpense, setTotalExpense] = useState(() => 3900)
    const { name, userID } = useContext(Context);

    async function getAllData() {
        const { data } = await axios.post('http://localhost:8000/getData.php', JSON.stringify({ userID }));
        console.log(data);

        const arr1Pie = [], arr2Pie = [];
        for (let i of data[0]) {
            arr1Pie.push(i?.event_status);
            arr2Pie.push(i?.sum);
        }
        const arr1Area = [], arr2Area = [];
        for (let i of data[1]) {
            arr1Area.push(i?.month);
            arr2Area.push(i?.sum);
        }
        setAreaLabel(arr1Area);
        setAreaData(arr2Area)
        setEventArray(arr1Pie);
        setDatasPie(arr2Pie);
        setTotalExpense(data[2]?.sum);
    }

    useEffect(() => {
        getAllData();
    }, [notifier]);



    useEffect(() => {

        var options = {
            series: [{
                name: 'series1',
                data: AreaData
            }],
            chart: {
                height: 180,
                type: 'area'
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'string',
                categories: AreaLabel
            },

        };
        var chart = new ApexCharts(document.querySelector("#LineChart"), options);
        chart.render();


        const options1 = {
            chart: {
                type: 'pie'
            },
            series: DatasPie,
            labels: eventArray
        };

        const Piechart = new ApexCharts(document.querySelector("#PieChart"), options1);
        Piechart.render();

        return () => {
            if (Piechart && chart) {
                Piechart.destroy();
                chart.destroy();
            }
        }
    }, [eventArray]);


    if (name)
        return (
            <Flex w={['90%', '90%', '70%']}
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
                        p={'2px 2px 10px 2px'}
                        overflow={'clip auto'}
                        maxH={['88vh']}
                        pos={['fixed', 'fixed', 'static']}
                        flexDir={'column'}
                        alignItems={['center', 'center', 'flex-start']}
                        w={['90%', '80%', '30%']}>
                        <Box id={'LineChart'} className='charts' />
                        <Box id={'PieChart'} h={200} className='charts' />

                        <Box borderRadius={10}
                            p={5}
                            boxShadow={'0 0 25px -18px black'}
                            bg={'whiteAlpha.900'}
                            textAlign={'center'}
                            color={'white'}
                            bgImg={'linear-gradient(to right,#37d5d6,#36096D)'}
                            w={'full'} h={['max-content', 'max-content', 'max-content']}>
                            Total Expenses : ₹{totalExpense}
                        </Box>
                        <Flex borderRadius={10}
                            p={5}
                            columnGap={2}
                            boxShadow={'0 0 25px -18px black'}
                            bg={'whiteAlpha.900'}
                            textAlign={'left'}
                            bgImg={'linear-gradient(to right,#37d5d6,#36096D)'}
                            w={'full'} h={['max-content', 'max-content', 'max-content', 60]}>
                            <Box display={'inline-block'}>
                                <Text color={'white'}>Budget : ₹{budget}</Text>
                                <Button w={'full'} mt={10} bgColor={'white'}>Set Budget</Button>
                            </Box>
                            <Image src={ExpenseIMG} objectFit={'contain'} w={'50%'} />
                        </Flex>
                    </Flex>
                    <Flex
                        backdropFilter={['blur(10px)', 'blur(10px)', 'blur(0px)']}
                        borderRadius={10}
                        pt={[10, 10, 0]}
                        pb={[10, 10, 0]}
                        boxShadow={['0 0 10px -5px black', '0 0 10px -5px black', 'none']}
                        pos={['absolute', 'absolute', 'relative']}
                        justifyContent={'center'}
                        w={['full', 'full', 'full', '70%']}
                        flexWrap={'wrap'}
                        zIndex={[11, 11, 0]}
                        h={['max-content', 'full', 700]}
                        top={['97vh', '97vh', '0vh']}
                        columnGap={5}>

                        {eventArray.length === 0 ?
                            <>
                                <Text>No Expenses Added</Text>
                                <NotFound id='NotFound' />
                            </>
                            :
                            eventArray.map((item, i) => <Cards
                                setNotifier={setNotifier}
                                userID={userID}
                                key={i} name={item}
                            />)}
                    </Flex>
                </Flex>
            </Flex>
        );
    return <Navigate to={'/'} />
}

export default Events