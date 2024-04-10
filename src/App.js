import React, { useState } from 'react'
// import Counter from './Componet/Counter'
// import { CounterProvider } from './Componet/CounterContext'
// import LoginSignUp from './Auth/login';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Profile from './Auth/profile';
import { ThemeProvider } from './Componet/context2/ThemeContext';
import ToggleButton from './Componet/context2/ToggleButton';
import './App.css'

function App() {
  const [name, setname] = useState('')
  return (
    <div className='App'>
      {/* <CounterProvider>
         <Counter />
      </CounterProvider> */}
      <ThemeProvider>
        <h1>Theme Toggle</h1>
        <ToggleButton />
      </ThemeProvider>

      
    </div>
  )
}

export default App;