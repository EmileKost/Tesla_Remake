import React from 'react';
import { useState, useEffect} from 'react';
import { useRef } from 'react';
import './App.css';

//Components
import Message from './components/message/Message.jsx';
import Header from './components/header/Header.jsx';
import Experience from './components/experience/Experience.jsx';
import Inventory from './components/modelThree/Inventory.jsx';
import Footer from './components/footer/Footer.jsx';
import { useInView } from 'react-intersection-observer';

// import ModelY from './components/modelY/ModelY.jsx';

function App() {

  // To fix footer problem we have to see whenever the last section is in sight.
  // Then the footer should be visible on the bottom of the page
  console.log(Inventory)

  return (
    <div className="app-root" >
      <Message/>
      <Header/>
      <main>
        <Experience/>
        <Inventory/>
      </main>
    </div>
  )
}

export default App
