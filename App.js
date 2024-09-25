import Keypad from './keypad'
import { useState } from 'react'
import './App.css'
export default function App(){
  let[input,setInput]=useState("")
  function handleClick(value){
setInput(input + value)
  }
  function calculate(value){
let outputVal=eval(input)
setInput(outputVal)
  }
  function handleClear(){
    setInput("")
      }
  return(
    <div className="container">
        <h1>Calculator</h1>
        <div className="calculator">
<input type="text" value={input} className="output"/>
<Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
        </div>
    </div>
  )
}