import React from 'react'
import { useState } from 'react'
import "./Style.css";

export default function Counter() {
    const[count,setcount]=useState(0)
    
  return (
    <div className='container'>
        <h2>
        <div className='border'>
          <div className='count'>
    {count}
        </div>
        
            <button className='button' onClick={()=>setcount(count+1)}>Count+</button>
            <button className='buttons' onClick={()=>setcount(count-1)}>Count-</button>
            </div>
        </h2>
    </div>
  )
}
