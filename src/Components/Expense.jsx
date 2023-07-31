import React, { useContext } from 'react';
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

const Expense = () => {
    const { name } = useContext(Context);
    return (
        <>
            <Box w={'90%'}>Welcome : {name}</Box>
            <Table w={'80%'}>

                <Thead><Tr><Th>X</Th></Tr></Thead>
                <TableCaption></TableCaption>
                <Tbody>

                </Tbody>
            </Table>
        </>
    )
}

export default Expense