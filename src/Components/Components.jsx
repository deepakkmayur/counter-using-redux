import React from 'react'
import { useState } from 'react'
import './Components.css'
import DisplayValue from './DisplayValue'
import { useDispatch } from 'react-redux';
import { incAction,decAction } from '../store/actions/Action'; 


const Components = () => {

  const dispatch=useDispatch()
  const [counter,setCounter] =useState(0)        

  const handleIncCounter=()=>{
    setCounter((prev)=>{
      return prev+1
   })
   dispatch(incAction(counter+1))
 
  }


  const handleDecCounter=()=>{
   setCounter((prev)=>{
    return prev -1
   })
   dispatch(decAction(counter-1))

  }




  return (
    <div className='counter'>
      <button className='button' onClick={handleDecCounter}>Decrement</button>
      <div className='view'><p className='text'>{counter}</p></div>
      <button className='button' onClick={handleIncCounter}>Increment </button>
      <h6>{<DisplayValue/>}</h6>
    </div>
  )
}



export default Components