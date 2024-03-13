import React from 'react'
import Image from 'next/image'; 
import r1 from '@/public/return1.svg';
import r2 from '@/public/return2.svg';

function AlgoBox({clickG,setClickG,name,graph,correct}) {
  return (
        <div className={`${name} w-5/6  shadow-start rounded-2xl flex flex-col items-center  mb-12 overflow-hidden`}>

        <div className='mb-8 flex flex-row  justify-between  px-14  w-full'>
        <h1 className='text-2xl font-bold mt-6'>{name}</h1>
        <div className='flex flex-row gap-2'>
        {(!clickG)? correct:""}
        <Image src={(clickG)? r2 : r1} width={14} height={48} onClick={()=>{setClickG(prev=>!prev); console.log(clickG)}} className=' cursor-pointer mt-8' alt='up down'/>
        </div>
        </div>


        {clickG && graph}
      </div>
  )
}

export default AlgoBox