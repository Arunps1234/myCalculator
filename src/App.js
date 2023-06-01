import React, { useState } from 'react';
import './App.css';
function App() {

  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  const [showdata, setShowdate] = useState(false)
  const [error, setError] = useState(false)

  const [value, setValue] = useState("")

const clickHandler = (e) =>{
  setValue(value.concat(e.target.value))
  console.log(value)
}

const finalAnswer = () =>{
  setValue(eval(value))
}

const clearValues  = () =>{
  setValue("")
}

  return (
    < div className='calculator'>
      <input type="text" style={{ width: "98%", height: "100px", fontSize: "60px",color:"white", overflow:"hidden" , background:"black"}} disabled value={value}  placeholder='0'/>
      <button value="9" onClick={clickHandler} className='btnnum'>9</button>
      <button value="8" onClick={clickHandler} className='btnnum'>8</button>
      <button value="7" onClick={clickHandler} className='btnnum'>7</button>
      <button value="6" onClick={clickHandler} className='btnnum'>6</button>
      <button value="5" onClick={clickHandler} className='btnnum'>5</button>
      <button value="4" onClick={clickHandler} className='btnnum'>4</button>
      <button value="3" onClick={clickHandler} className='btnnum'>3</button>
      <button value="2" onClick={clickHandler} className='btnnum'>2</button>
      <button value="1" onClick={clickHandler} className='btnnum'>1</button>
      <button value="0" onClick={clickHandler} className='btnnum'>0</button>
      <button value="+" onClick={clickHandler} className='btnnum'>+</button>
      <button value="-" onClick={clickHandler} className='btnnum'>-</button>
      <button value="*" onClick={clickHandler} className='btnnum'>*</button>
      <button value="/" onClick={clickHandler} className='btnnum'>/</button>


      <button onClick={finalAnswer} className='equal'>=</button>
      <button onClick={clearValues} className='clear'>Clr</button>

    </div>
  );
}

export default App;
