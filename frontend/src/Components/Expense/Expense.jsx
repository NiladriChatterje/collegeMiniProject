import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Flex,
    Text,
    Image,
} from '@chakra-ui/react'
import ExpenseBG from '../../assets/ExpenseBG.svg'
import { Context } from '../../App';
import { Navigate, useParams } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md'
import RecordAdderModal from './RecordAdderModal';
import axios from 'axios';

const Expense = () => {
    const { name, userID } = useContext(Context);
    const [recordAdder, setRecordAdder] = useState(() => false)
    const [eventDetailsArray, setEventDetailsArray] = useState(() => []);
    const { nameId } = useParams();
    const timestampRecordRef = useRef([]);

    async function getDetailsOfAnEvent(nameId, userID) {
        const { data } = await axios.post("http://localhost:8000/getRecordsOfAnEvent.php", JSON.stringify({ nameId, userID }))
        console.log(data);
        const arr = [];
        for (let i of data)
            arr.push({ timestamp: i?.timestamp, description: i?.purpose, amount: i?.amount })
        setEventDetailsArray([...eventDetailsArray, ...arr])
    }
    useEffect(() => {
        getDetailsOfAnEvent(nameId, userID)
    }, []);


    async function deleteRecord(index) {
        setEventDetailsArray(eventDetailsArray.filter((_, i) => i !== index))
        const date = Date.parse(timestampRecordRef.current[index].innerText)


        console.log(date);
        const { data } = await axios.post("http://localhost:8000/deleteRecord.php", JSON.stringify(
            { userID: parseInt(userID), timestamp: timestampRecordRef.current[index].innerText }
        ));
        console.log(data);
    }

    if (name && nameId)
        return (
            <>
                {recordAdder && <RecordAdderModal
                    nameId={nameId}
                    userID={userID}
                    eventDetailsArray={eventDetailsArray}
                    setEventDetailsArray={setEventDetailsArray}
                    setRecordAdder={setRecordAdder} />}
                <Image src={ExpenseBG}
                    pos={'fixed'} zIndex={-2} opacity={0.2} transform={['scale(1)', 'scale(1)', 'scale(0.5)']} />
                <Text
                    pos={'absolute'}
                    left={10} top={5}
                >{name}</Text>

                <Text
                    w={['max-content', '80%']}
                    p={1}
                    mt={6}
                    bg={'blue.100'}
                    fontWeight={700}
                    fontSize={20}
                    borderRadius={10}
                    boxShadow={'0 2px 8px -6px black'}
                    textAlign={'center'}>{nameId}</Text>


                <Divider h={5} />
                <Flex
                    flexDir={'column'}
                    w={'full'}
                    h={'full'}
                    alignItems={'center'}
                    overflow={'clip auto'}
                >
                    <Flex justifyContent={'center'} maxH={'80%'}
                        w={['95%', '95%', '70%']}
                        overflow={'clip auto'}>

                        <Table
                            fontSize={12}
                            w={'100%'}
                            mt={5}>
                            <Thead>
                                <Tr
                                    w={'full'}
                                    bgColor={'whiteAlpha.900'}
                                    borderRadius={10}
                                >
                                    <Th>TimeStamp</Th>
                                    <Th>Description</Th>
                                    <Th>Amount</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {eventDetailsArray?.map(
                                    (item, i) => (
                                        <Tr
                                            className='expenseRow'
                                            key={i}
                                            mt={15}
                                            borderRadius={10}
                                        >
                                            <Td ref={el => timestampRecordRef.current[i] = el}>{item?.timestamp}</Td>
                                            <Td>{item?.description?.length < 25 ?
                                                item?.description : item?.description.slice(0, 25)}</Td>
                                            <Td display={'flex'}
                                                justifyContent={'space-between'}
                                            >
                                                <Text>{item?.amount}</Text>
                                                <MdDeleteForever className='delicon'
                                                    onClick={(e) => deleteRecord(i)} />
                                            </Td>
                                        </Tr>
                                    )
                                )
                                }
                            </Tbody>
                        </Table>
                    </Flex>
                    <AiFillPlusCircle
                        size={45}
                        style={{ margin: '10px 0' }}
                        cursor={'pointer'}
                        onClick={() => setRecordAdder(true)}
                    />
                </Flex>
            </>
        );

    return <Navigate to={'/'} />
}

export default Expense