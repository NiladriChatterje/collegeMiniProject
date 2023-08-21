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
} from '@chakra-ui/react'
import { Context } from '../../App';
import { toast } from 'react-hot-toast'
import { Navigate, useParams } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';

const Expense = () => {
    const { name } = useContext(Context);
    const [eventDetailsArray, setEventDetailsArray] = useState([
        {
            timestamp: new Date().toString(),
            purpose: 'Restaurant',
            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toString(),
            purpose: 'Restaurant',
            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toString(),
            purpose: 'Restaurant',
            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toString(),
            purpose: 'Restaurant',
            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toString(),
            purpose: 'Restaurant',
            description: 'China town, 32A street',
            amount: 650
        },


        {
            timestamp: new Date().toString(),
            purpose: 'Restaurant',
            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toString(),
            purpose: 'Restaurant',
            description: 'China town, 32A street',
            amount: 650
        },
        {
            timestamp: new Date().toString(),
            purpose: 'Restaurant',
            description: 'China town, 32A street',
            amount: 650
        },


        {
            timestamp: new Date().toString(),
            purpose: 'Restaurant',
            description: 'China town, 32A street',
            amount: 650
        },


    ]);

    const { nameId } = useParams();


    useEffect(() => {
        toast(nameId);
    }, []);

    if (name && nameId)
        return (
            <>
                <Flex mt={5}
                    fontSize={12}
                    w={'80%'}
                    gap={5}
                    justifyContent={'space-between'}
                    mb={5}>
                    <Box w={'max-content'}
                        display={'inline-block'}
                        boxShadow={'0 2px 10px -6px black'}
                        borderRadius={10}
                        p={2}>Welcome : {name}</Box>

                    <Box display={'inline-block'}
                        w={'80%'}
                        p={2}
                        fontWeight={900}
                        fontSize={20}
                        borderRadius={10}
                        boxShadow={'0 2px 10px -6px black'}
                        textAlign={'right'}>{nameId}</Box>
                </Flex>


                <Divider height={5} />
                <Flex
                    flexDir={'column'}
                    w={'full'}
                    h={'full'}
                    alignItems={'center'}
                    overflow={'clip auto'}
                >
                    <Table
                        fontSize={12}
                        w={'80%'}
                        mt={10}>
                        <Thead>
                            <Tr
                                onMouseEnter={''}
                                borderRadius={10}
                                boxShadow={'0 6px 15px -15px black'}>
                                <Th>TimeStamp</Th>
                                <Th>Purpose</Th>
                                <Th>Description</Th>
                                <Th>Amount</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {eventDetailsArray?.map(
                                (item, i) => (
                                    <Tr
                                        border={'1px solid red'}
                                        key={i}
                                        mt={15}
                                        borderRadius={10}
                                        boxShadow={'0 3px 15px -12px black'}>
                                        <Td>{item?.timestamp}</Td>
                                        <Td>{item?.purpose}</Td>
                                        <Td>{item?.description.length < 25 ?
                                            item?.description : item?.description.slice(0, 25)}</Td>
                                        <Td>{item?.amount}</Td>
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