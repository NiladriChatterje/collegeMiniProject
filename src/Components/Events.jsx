import { Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Context } from '../App'
import { AiOutlinePlusSquare } from 'react-icons/ai';

const Events = () => {
    const { name } = useContext(Context);
    return (
        <>
            <nav>
                <Text>{name}</Text>
                <AiOutlinePlusSquare size={30} />
            </nav>
        </>
    )
}

export default Events