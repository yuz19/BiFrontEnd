import React from 'react'

function Input({nameId,type,name}) {
  return (
    <>
        <input type={type} id={nameId} required placeholder={name} className='w-full focus:outline-none  border-solid   border-b-2 border-primaryBlue mb-[42px]'/>
    </>
  )
}

export default Input