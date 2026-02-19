import { useCounter } from './store'
import { OtherComponent } from './OtherComponent';

const App = () => {
// const {count,increment,decrement}= useCounter();

const {count}= useCounter();
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
      <OtherComponent/>
    </div>
  )
}

export default App