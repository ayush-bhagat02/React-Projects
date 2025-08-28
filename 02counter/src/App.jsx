import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [warning, setWarning] = useState('')
  
  //let counter = 0

  const addValue = () => {
    if(count == 20){
      warning = 'cannot add more values'
      setWarning(warning)
      return
    }
    setCount(count + 1)
  }
  const removeValue = () =>{
    if(count == 0){
      warning = 'cannot remove more values'
      setWarning(warning)
      return
    }
    setCount(count - 1)
  }

  return (
    <>
      <h1>chai aur ract</h1>
      <h2>counter value : {count}</h2>

      <button onClick={addValue}>Add value{count}</button>
      <br/>
      <button onClick={removeValue}>remove value{count}</button>
      <h4>Warning: {warning}</h4>
    </>
  )
}

export default App
