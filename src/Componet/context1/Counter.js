import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

function Counter() {
    const {count , increment , decrement} = useContext(CounterContext)
  return (
    <div>
       <h1> Counter Context Example</h1>
       <p>
        <div>
         <button onClick={increment}>+1</button>
         </div>
         Counter : {count}
         
         <div>
         <button onClick={decrement}>-1</button>
         </div>
       </p>
    </div>
  )
}

export default Counter