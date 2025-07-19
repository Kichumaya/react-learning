import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // const addValue = () => {
  //   console.log('counter', counter)
  //   if(counter == 20){
  //     counter
  //   }else{
  //     counter += 1
  //   }
  //   setCounter(counter)
  // }

  // interview question - if i duplicate the secounter the what will be printed if clicked the button
  const addValue = () => {
    // question 1 - what will be output
    // value updated by only one - because react updat the value by sending the batch but there are repetative task so it update the final value
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // question 2 - but what if we want the values to update like above +4
    // we can acheive this by callback function if take the previous value and update
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

  }
  const removeValue = () => {
    if(counter == 0){
      counter
    }else{
      counter = counter - 1
    }
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
