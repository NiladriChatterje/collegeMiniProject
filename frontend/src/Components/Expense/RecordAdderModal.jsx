import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const RecordAdderModal = ({ setRecordAdder, userID, setEventDetailsArray, eventDetailsArray }) => {
    const { nameId } = useParams();

    const InputDataRef = useRef([]);
    async function addRecordOfEvent() {
        const modifiedTimeStamp = InputDataRef.current[0].value.split('T');
        modifiedTimeStamp[1] = modifiedTimeStamp[1] + ":00";

        const { data } = await axios.post('http://localhost:8000/addDataToEvent.php', JSON.stringify({
            timestamp: modifiedTimeStamp.join(" "),
            description: InputDataRef.current[1].value,
            amount: parseFloat(InputDataRef.current[2].value),
            userID: parseInt(userID),
            nameId
        }));
        if (data)
            setEventDetailsArray([...eventDetailsArray, { timestamp: modifiedTimeStamp.join(" "), description: InputDataRef.current[1].value, amount: parseFloat(InputDataRef.current[2].value) }])

        toast(data ? "successfully added!" : "Ran into some issue will adding record");
        setRecordAdder(false);
    }

    return (
        <Flex
            w={'full'}
            h={'full'}
            pos={'fixed'}
            left={0}
            top={0}
            zIndex={1}
            bgColor={'blackAlpha.900'}
            justifyContent={'center'}
            alignItems={'center'}>
            <FormControl bg={'white'} w={'50%'}>
                <FormLabel>Date & Time</FormLabel>
                <Input type='datetime-local' max={new Date().toISOString().split('.')[0]} required ref={el => InputDataRef.current.push(el)} />
                <FormLabel>Description</FormLabel>
                <Input type='text' required ref={el => InputDataRef.current.push(el)} />
                <FormLabel>Amount</FormLabel>
                <Input type='number' required ref={el => InputDataRef.current.push(el)} />
                <Button onClick={() => setRecordAdder(false)}>Close</Button>
                <Button onClick={addRecordOfEvent}>Add</Button>
            </FormControl>
        </Flex>
    )
}

export default RecordAdderModal