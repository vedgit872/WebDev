import { useState } from 'react'
import Greter from './Greter'
import './App.css'
import  Slots from "./Slots";

function App() {
  return (
    <>
        <Greter person="Vedant" age={20}/>
        <Greter person="Harshit" age={16}/>
        <Slots val1="😁" val2="5" val3="5"/>
        <Slots val1="😁" val2="😁" val3="😁"/>
    </>
  );
}

export default App
