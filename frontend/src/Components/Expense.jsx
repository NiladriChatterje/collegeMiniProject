import React, { useContext, useEffect } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Divider,
    Flex,
} from '@chakra-ui/react'
import { Context } from '../App';
import { toast } from 'react-hot-toast'
import { Navigate, useParams } from 'react-router-dom';

const Expense = () => {
    const { name } = useContext(Context);
    const { nameId } = useParams();


    useEffect(() => {
        toast(nameId);
    }, []);

    if (name)
        return (
            <><Flex mt={5}
                w={'80%'}
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
                    fontSize={15}
                    borderRadius={10}
                    boxShadow={'0 2px 10px -6px black'}
                    textAlign={'right'}>{nameId}</Box>
            </Flex>


                <Divider height={5} />
                <Table
                    w={'80%'}
                    mt={10}
                >

                    <Thead>
                        <Tr
                            borderRadius={10}
                            boxShadow={'0 6px 15px -15px black'}>
                            <Th>TimeStamp</Th>
                            <Th>Purpose</Th>
                            <Th>Description</Th>
                            <Th>Amount</Th>
                        </Tr>
                    </Thead>
                    <TableCaption></TableCaption>
                    <Tbody>
                        <Tr
                            mt={10}
                            borderRadius={10}
                            boxShadow={'0 3px 15px -12px black'}>
                            <Td>{new Date().getTime()}</Td>
                            <Td>Restaurant</Td>
                            <Td>Description</Td>
                            <Td>600</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </>
        );

    return <Navigate to={'/'} />
}

export default Expense