import './App.css';
import Profile from './assets/profile.png';
import { ReactComponent as Piggy } from './assets/Piggy.svg';
import { Flex, Image } from '@chakra-ui/react';
import { Login, Expense, Event } from './Components/index';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export const Context = createContext();

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState('');


  return (
    <Context.Provider value={{ name, setName }} >
      <Toaster />
      <Flex
        w={'full'}
        flexDir={'column'}
        h={'100vh'}
        justifyContent={name === '' ? 'center' : 'flex-start'}
        alignItems={'center'}>

        <Image
          mb={5}
          src={Profile}
          alt={'Profile Picture'}
          boxShadow={'0 -8px 10px -8px black'}
          onClick={() => { navigate('/'); setName('') }}
          w={'80px'}
          h={'80px'}
          bg={'whiteAlpha.400'}
          borderRadius={'50%'}
          id={'Profile'} />

        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/:abc'} element={<Navigate to={'/'} />} />
          <Route path={'/expense/:nameId'} element={<Expense />} />
          <Route path={'/events'} element={<Event />} />
        </Routes>

        <Piggy id='Piggy' />

      </Flex>
    </Context.Provider>
  )
}

export default App
