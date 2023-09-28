import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = ( )=>{
    if(counter<20){
      setCounter(counter+1);
    }else{
      alert("you can't add more than 20")
    }
  }
  const removeValue =() => {
    if(counter>1){
    setCounter(counter-1)
  }else{
    alert("you can't remove more than")
  }
  }

  return(
    <>
      <h1>chai or react</h1>
      <h2>counter value:{counter}</h2>

      <button 
      onClick={addValue}>
        Add value {counter}
      </button>
      <br/>
      <button 
      onClick={removeValue}>
        Remove value {counter}
      </button>
      
        
    </>
  )
}

export default App
