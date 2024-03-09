'use client'
import React from 'react'

function Input({nameId,type,name,valuer,setfunction,handleChange}) {
   
 
  return (
    <>
       <input type={type} id={nameId} required={true} onChange={(e) => handleChange(e, setfunction)}  value={valuer}  placeholder={name} className='w-full py-2 px-2 focus:outline-none  border-solid   border-b-2 border-primaryBlue mb-[42px]'  />

    </>
  )
}

export default Input