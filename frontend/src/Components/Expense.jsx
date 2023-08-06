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
} from '@chakra-ui/react'
import { Context } from '../App';
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom';

const Expense = () => {
    const { name } = useContext(Context);
    const { nameId } = useParams();


    useEffect(() => {
        toast(nameId);
    }, []);
    return (
        <>
            <Box w={'90%'}>Welcome : {name}</Box>
            <Table w={'80%'}>

                <Thead>
                    <Tr>
                        <Th>TimeStamp</Th>
                        <Th>Purpose</Th>
                        <Th>Description</Th>
                        <Th>Amount</Th>
                    </Tr>
                </Thead>
                <TableCaption></TableCaption>
                <Tbody>
                    <Tr>
                        <Td>TimeStamp</Td>
                        <Td>Purpose</Td>
                        <Td>Description</Td>
                        <Td>Amount</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    )
}

export default Expense