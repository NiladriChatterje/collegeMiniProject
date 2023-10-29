import './App.css';
import React from 'react'
import Profile from './assets/Profile.svg';
import { Flex, Image } from '@chakra-ui/react';
import { Login, Expense, Event } from './Components/index';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

export const Context = createContext();

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [userID, setUserID] = useState(() => 0);

  async function destroySession() {
    const { data } = axios.post('http://localhost:8000/destroySession.php');
    console.log(data);
  }

  return (
    <Context.Provider value={{ name, setName, userID, setUserID }} >
      <Toaster />
      <Flex
        overflow={'clip auto'}
        w={'full'}
        flexDir={'column'}
        h={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}>

        <Image
          mb={5}
          src={Profile}
          alt={'Profile Picture'}
          boxShadow={'0 -8px 10px -8px black'}
          onClick={() => { destroySession(); navigate('/'); setName(''); }}
          w={'70px'}
          h={'70px'}
          bg={'whiteAlpha.400'}
          borderRadius={'50%'}
          id={'Profile'} />

        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/:abc'} element={<Navigate to={'/'} />} />
          <Route path={'/expense/:nameId'} element={<Expense />} />
          <Route path={'/events'} element={<Event />} />
        </Routes>

      </Flex>
    </Context.Provider>
  )
}

export default App
