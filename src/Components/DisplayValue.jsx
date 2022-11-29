import React from 'react'
import { useSelector } from 'react-redux'

const DisplayValue = () => {
  
 const data= useSelector((state)=>{
  return state
 })
 console.log(data,"data//");

  return (
    <div style={{fontSize:"30px"}}>
      {data.payload}
      </div>
  )
}

export default DisplayValue