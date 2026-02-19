import React from 'react'
import { useCounter } from './store'

const App = () => {
 const count= useCounter(state=>state.count);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default App