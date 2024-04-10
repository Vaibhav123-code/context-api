import React, { createContext } from 'react'
import { useState } from 'react'

export const CounterContext = createContext() // create context

export function CounterProvider({children}) {  // provider function 
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
       setCount(count - 1);
    }

  return (
     <CounterContext.Provider value={{count, increment, decrement}}>
        {children}
     </CounterContext.Provider>
  )
  }
  // useContext hook is a way to share values between components without using props