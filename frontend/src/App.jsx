import './App.css';
import Profile from './assets/profile.png';
import ExpenseLogo from './assets/Expense_Tracker.jpg'
import { Flex, Image } from '@chakra-ui/react';
import { Login, Expense, Event } from './Components/index';
import { Route, Routes, useNavigate } from 'react-router-dom';
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

        <Image src={Profile} alt={'Profile Picture'}
          boxShadow={'0 -8px 10px -8px black'}
          onClick={() => { navigate('/'); setName('') }}
          w={250} h={250} borderRadius={'50%'} id={'Profile'} />
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/expense/:nameId'} element={<Expense />} />
          <Route path={'/events'} element={<Event />} />
        </Routes>
        <Image src={ExpenseLogo} alt='logo' w={40}
          pos={'fixed'} left={0} bottom={10} filter={'drop-shadow(0 0 5px black)'} />
      </Flex>
    </Context.Provider>
  )
}

export default App
