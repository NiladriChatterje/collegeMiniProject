import React, { useContext, useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Box,
    Divider,
    Flex,
    Text,
    Image,
} from '@chakra-ui/react'
import ExpenseBG from '../../assets/ExpenseBG.svg'
import { Context } from '../../App';
import { toast } from 'react-hot-toast'
import { Navigate, useParams } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md'

const Expense = () => {
    const { name } = useContext(Context);
    const [eventDetailsArray, setEventDetailsArray] = useState([
        {
            timestamp: new Date().toLocaleString(),

            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toLocaleString(),

            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toLocaleString(),

            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toLocaleString(),

            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toLocaleString(),

            description: 'China town, 32A street',
            amount: 650
        },


        {
            timestamp: new Date().toLocaleString(),

            description: 'Hatibagan,Aminia',
            amount: 650
        },
        {
            timestamp: new Date().toLocaleString(),
            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toLocaleTimeString(),

            description: 'China town, 32A street',
            amount: 650
        },


        {
            timestamp: new Date().toLocaleString(),

            description: 'Rajarhat Chowmatha, 99',
            amount: 650
        },


    ]);
    const { nameId } = useParams();

    useEffect(() => {
        toast(nameId);
    }, []);

    async function deleteRecord(e, index) {
        setEventDetailsArray(eventDetailsArray.filter((_, i) => i !== index))
        console.log()
    }

    if (name && nameId)
        return (
            <>
                <Image src={ExpenseBG}
                    pos={'fixed'} zIndex={-2} opacity={0.3} transform={['scale(1)', 'scale(1)', 'scale(0.5)']} />
                <Text
                    pos={'absolute'}
                    left={10} top={5}
                >{name}</Text>

                <Text
                    w={['max-content', '80%']}
                    p={1}
                    mt={6}
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
                    <Table
                        fontSize={12}
                        w={['100%', '100%', '70%']}
                        mt={5}>
                        <Thead>
                            <Tr
                                w={'full'}
                                bgColor={'whiteAlpha.900'}
                                borderRadius={10}
                            >
                                <Td>SL No.</Td>
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
                                        <Td>{i + 1}</Td>
                                        <Td>{item?.timestamp}</Td>
                                        <Td>{item?.description.length < 25 ?
                                            item?.description : item?.description.slice(0, 25)}</Td>
                                        <Td display={'flex'}
                                            justifyContent={'space-between'}
                                        >
                                            <Text>{item?.amount}</Text>
                                            <MdDeleteForever className='delicon'
                                                onClick={(e) => deleteRecord(e, i)} />
                                        </Td>
                                    </Tr>
                                )
                            )
                            }
                        </Tbody>
                        <TableCaption
                        >
                            <AiFillPlusCircle
                                size={45}
                                style={{ marginBottom: 25 }}
                                cursor={'pointer'}
                                onClick={''}
                            />
                        </TableCaption>
                    </Table>
                </Flex>
            </>
        );

    return <Navigate to={'/'} />
}

export default Expense