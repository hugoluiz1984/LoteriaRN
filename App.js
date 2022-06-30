import { View, Text, Button } from 'react-native'
import React,{ useState} from 'react';
import Menu from './components/Menu'
import Mega from './components/Mega';


export default function App() {
  const [teste, setTeste] = useState(6);
  const [screen, setScreen] = useState('menu');
  


  function getScreenMenu(){
    return (
      <>
        <Menu setScreen={setScreen}/>
      </>
    )
  }
  function getScreenMega(){
    return (
      <>
        <Mega setScreen={setScreen}/>
      </>
    )
  }
  switch (screen) {
    case 'menu':
      return getScreenMenu();
    case 'mega':
      return getScreenMega();
    //case 'win':
    //  return getScreenWin();
  }
}