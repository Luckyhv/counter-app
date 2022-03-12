import React,{useState} from 'react'
import './App.css'

export default function App() {
  const [count,setcount]=useState(0);
  const handlecount=()=>{
    setcount(count+1);
  }
  const handledecre=()=>{
    setcount(count-1);
  }
  const handlereset=()=>{
    setcount(0);
  }
  return (
    <div className='cont'>
      <h1 >Counter App</h1>
      <h2 >{count}</h2>
      <div className='values'>
        <button className='btn' onClick={handlecount}>Increase</button>
        <button className='btn' onClick={handledecre}>Decrease</button>
        <button className='btn' onClick={handlereset}>Reset</button>
      </div>
    </div>
  )
}
