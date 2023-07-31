import './App.css';
import Profile from './assets/profile.png';
import { Flex, Image } from '@chakra-ui/react';
import { Login, Expense, Event } from './Components/index';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { createContext, useState } from 'react';

export const Context = createContext();

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  return (
    <Context.Provider value={{ name, setName }} >
      <Flex
        w={'full'}
        flexDir={'column'}
        h={'100vh'}
        alignItems={'center'}>

        <Image src={Profile} alt={'Profile Picture'} onClick={() => navigate('/')}
          w={250} h={250} borderRadius={'50%'} id={'Profile'} />
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/expense'} element={<Expense />} />
          <Route path={'/events'} element={<Event />} />
        </Routes>

      </Flex>
    </Context.Provider>
  )
}

export default App
